<template>
  <section class="section service" id="911363">
    <h2 class="section__title">Контакты</h2>
    <p class="form__label form__label_radio">Выберите предпочитаемый вид связи:</p>
    <div class="form__radiobuttons">
      <div v-for="c in communications" :key="c">
        <button
          :id="c"
          :name="c"
          class="form__button_radio"
          :class="{ _active: contactType === c }"
          :style="{
            backgroundImage: `url(${require('../assets/images/icons/' +
              `${c}.png`)})`,
          }"
          @click="handleRadio($event)"
        ></button>
      </div>
    </div>
    <form
      class="form"
      action=""
      @submit.prevent="onSubmit"
      @input="formUpdated"
      autocomplete="off"
    >
      <div class="form__field">
        <label for="name" class="form__label">Имя</label>
        <input
          type="text"
          id="name"
          :value="formState.name"
          placeholder="Ваше имя"
          class="form__input"
          autocomplete="off"
          @input="handleChange($event)"
        />
        <p class="form__error">{{ formError.name }}</p>
      </div>
      <div class="form__field">
        <label for="contact" class="form__label">{{
          ENUM_COMMUNICATION[contactType]
        }}</label>
        <input
          type="text"
          id="contact"
          :value="formState.contact"
          placeholder="Ваш контакт"
          class="form__input"
          @input="handleChange($event)"
        />
        <p class="form__error">{{ formError.contact }}</p>
      </div>
      <div class="form__field">
        <label for="message" class="form__label">Сообщение, отзыв</label>
        <textarea
          type="text"
          id="message"
          :value="formState.message"
          placeholder="Отправьте мне сообщение"
          class="form__input form__input_textarea"
          rows="5"
          cols="30"
          @input="handleChange($event)"
        ></textarea>
        <p class="form__error">{{ formError.message }}</p>
      </div>
      <div class="form__control">
        <button
          type="button"
          class="form__button form__button_clear"
          :class="{ _disabled: isFormClear }"
          :disabled="isFormClear"
          @click="handleClearForm"
        >
          Очистить
        </button>
        <button
          type="button"
          class="form__button form__button_submit"
          :class="{ _active: isFormCompleted }"
          :disabled="!isFormCompleted"
          @click="submitForm"
        >
          Отправить
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import api from "../api";

const REG_NAME = /^[a-zA-Zа-яА-ЯЁё\s-_']+$/i;
const REG_TELEGRAM = /^@[A-Za-z\d_]{5,64}$/;
const REG_PHONE = /^\+(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const REG_EMAIL = /^([a-zA-Z\d_.+-])+@(([a-zA-Z\d-])+\.)+([a-zA-Z0\d]{2,4})+$/;

const COMMUNICATION = {
  phone: "Телефон",
  telegram: "Имя пользователя Telegram",
  whatsapp: "Телефон WhatsApp",
  email: "Электронный адрес",
};
function initialForm() {
  return {
    name: "",
    contact: "+7",
    message: "",
  };
}
function initialError() {
  return {
    name: "",
    contact: "",
    message: "",
  };
}
export default {
  data() {
    return {
      ENUM_COMMUNICATION: COMMUNICATION,
      communications: ["phone", "telegram", "whatsapp", "email"],
      contactType: "phone",
      formState: initialForm(),
      formError: initialError(),
      isFormCompleted: false,
      isFormClear: true,
    };
  },
  methods: {
    handleChange(event) {
      const { id, value } = event.target;
      if (id === "name") {
        this.formState.name = value;
        if (value.length === 0)
          return (this.formError.name = "Поле должно быть заполнено");
        if (value.length < 2)
          return (this.formError["name"] =
            "Имя должно быть больше одной буквы");
        if (!REG_NAME.test(value))
          return (this.formError["name"] = `Только буквы, пробел - _ '`);
        return (this.formError["name"] = "");
      }
      if (id === "contact") {
        this.formState.contact = value;
        if (value.length === 0)
          return (this.formError.contact = "Поле должно быть заполнено");
        if (this.contactType === "telegram") {
          if (!/^@/.test(value))
            return (this.formError.contact = "Первый символ @");
          if (!REG_TELEGRAM.test(value))
            return (this.formError.contact =
              "Только латинские буквы и _, больше 5 символов");
        }
        if (this.contactType === "email") {
          if (!REG_EMAIL.test(value))
            return (this.formError.contact = "Введите корректный адрес почты");
        }
        if (this.contactType === "phone" || this.contactType === "whatsapp") {
          if (!/^\+/.test(value))
            return (this.formError.contact = "Первый символ +");
          if (!REG_PHONE.test(value))
            return (this.formError.contact =
              "Введите корректный номер, больше 10 цифр");
        }
        return (this.formError.contact = "");
      }
      if (id === "message") {
        this.formState.message = value;
        if (value.length === 0)
          return (this.formError.message = "Поле должно быть заполнено");
        if (value.length < 30)
          return (this.formError.message =
            "Сообщение должно быть не менее 30 символов");
        return (this.formError.message = "");
      }
    },
    handleRadio(event) {
      this.contactType = event.target.name;
      switch (event.target.name) {
        case "phone":
        case "whatsapp":
          this.formState.contact = "+7";
          break;

        case "telegram":
          this.formState.contact = "@";
          break;

        default:
          this.formState.contact = "";
          break;
      }
    },
    handleClearForm() {
      this.formState = initialForm();
      this.formError = initialError();
      this.contactType = "phone";
      this.isFormCompleted = false;
      this.isFormClear = true;
    },
    async submitForm() {
      let message = `Request: Pravilo / Massage%0AName: ${this.formState.name}%0ACommunication: ${this.contactType}%0AContact: ${this.formState.contact}%0AMessage: ${this.formState.message}`;
      try {
        await api.post(
          `/sendMessage?chat_id=${process.env.VUE_APP_TELEGRAM_CHAT_ID}&text=${message}`
        );
        this.handleClearForm();
      } catch (e) {
        console.error(e);
      }
    },
    formUpdated() {
      this.isFormClear = false;
      // проверка на заполенение каждого поля формы
      for (let key in this.formState) {
        if (this.formState[key] == null || this.formState[key] == "")
          return (this.isFormCompleted = false);
      }
      return (this.isFormCompleted = true);
    },
  },
};
</script>

<style lang="sass">
.form
    margin-top: min(30px, 5vw)
    display: flex
    flex-direction: column
    gap: min(25px, 5vw)
    &__radiobuttons
        display: flex
        flex-direction: row
        align-items: center
        gap: min(20px, 5vw)
    &__radiobutton
        display: none
        &_label
            text-transform: capitalize
            color: blue
            &._active
                color: red
    &__field
        display: flex
        flex-direction: column
        gap: min(5px, 1vw)
    &__input
        width: min(400px, 100%)
        font-family: 'Jura'
        font-size: min(20px, 5vw)
        height: min(50px, 10vw)
        border: none
        border-bottom: 1px solid rgba(grey, 0.5)
        resize: none
        &:focus
          outline: none
          border-bottom: 1px solid rgba(blue, 0.5)
        &::placeholder
          color: rgba(grey, 0.5)
        &_textarea
          width: 100%
          height: auto
    &__label
        font-size: min(18px, 4vw)
        margin: 0
        &_radio
            margin-top: min(50px, 10vw)
            margin-bottom: min(20px, 3vw)
    &__control
        display: flex
        flex-direction: row
        justify-content: space-between
        padding: 0 min(30px, 3vw)
        margin-top: min(40px, 5vw)
        @media screen and (min-width: 768px)
            padding: 0
            justify-content: flex-end
            gap: 20px
    &__button
        border: none
        background: transparent
        border-radius: min(12px, 2vw)
        padding: 10px 30px
        font-size: min(24px, 5vw)
        cursor: pointer
        &_clear
            border: 1px solid rgba(blue, 0.5)
            color: rgba(blue, 0.5)
            &._disabled
                border: 1px solid rgba(grey, 0.5)
                color: rgba(grey, 0.5)
        &_submit
            color: rgba(white, 1)
            background: rgba(grey, 0.5)
            &._active
                background: rgba(blue, 0.5)
        &_radio
            width: 40px
            height: 40px
            opacity: 1
            border: none
            cursor: pointer
            background-color: transparent
            background-position: center
            background-size: cover
            transform: scale(0.6)
            transition: all 0.5s ease
            &._active
                transform: scale(1)
    &__error
        font-size: min(14px, 3vw)
        padding: 0
        margin: 0
        color: red
        height: 16px
</style>
../api
