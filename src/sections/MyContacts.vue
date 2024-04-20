<template>
  <section class="section">
    <h2 class="section__title">Контакты</h2>
    <form
      class="form"
      action=""
      @submit.prevent="onSubmit"
      @input="formUpdated"
    >
      <div class="form__radiobuttons">
        <div v-for="c in communications" :key="c">
          <input
            type="radio"
            :id="c"
            :name="c"
            class="form__radiobutton"
            @click="handleRadio($event)"
          />
          <label
            :for="c"
            class="form__radiobutton_label"
            :class="{ _active: contactType === c }"
            >{{ c }}</label
          >
        </div>
      </div>
      <div class="form__field">
        <label for="first_name" class="form__label">Имя</label>
        <input
          type="text"
          id="name"
          :value="formState.name"
          placeholder="Введите ваше имя"
          class="form__input"
          autocomplete="off"
          @input="handleChange($event)"
        />
        <p class="form__error">Ошибка имени</p>
      </div>
      <div class="form__field">
        <label for="contact" class="form__label">{{
          ENUM_COMMUNICATION[contactType]
        }}</label>
        <input
          type="text"
          id="contact"
          :value="formState.contact"
          placeholder="Введите ваш контакт"
          class="form__input"
          autocomplete="off"
          @input="handleChange($event)"
        />
        <p class="form__error">Ошибка контакта</p>
      </div>
      <div class="form__field">
        <label for="message" class="form__label">Сообщение, отзыв...</label>
        <textarea
          type="text"
          id="message"
          :value="formState.message"
          placeholder="Отправьте мне сообщение, отзыв..."
          autocomplete="off"
          @input="handleChange($event)"
        ></textarea>
        <p class="form__error">Ошибка сообщения</p>
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
const COMMUNICATION = {
  PHONE: "Телефон",
  TELEGRAM: "Имя пользователя",
  WHATSAPP: "Телефон",
  EMAIL: "Электронный адрес",
};
function initialForm() {
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
      communications: ["PHONE", "TELEGRAM", "WHATSAPP", "EMAIL"],
      contactType: "PHONE",
      formState: initialForm(),
      isFormCompleted: false,
      isFormClear: true,
    };
  },
  methods: {
    handleChange(event) {
      console.log("Input value changed", event.target.id, event.target.value);
      if (event.target.id === "name")
        return (this.formState.name = event.target.value);
      if (event.target.id === "contact")
        return (this.formState.contact = event.target.value);
      if (event.target.id === "message")
        return (this.formState.message = event.target.value);
    },
    handleRadio(event) {
      this.contactType = event.target.name;
    },
    handleClearForm() {
      this.formState = initialForm();
      this.contactType = "PHONE";
      this.isFormCompleted = false;
      this.isFormClear = true;
    },
    submitForm() {
      alert("Form successfully submitted");
    },
    formUpdated() {
      this.isFormClear = false;
      // проверка на заполенение каждого поля формы
      for (let key in this.formState) {
        if (this.formState[key] == null || this.formState[key] == '') return this.isFormCompleted = false;
      }
      return this.isFormCompleted = true;
    },
  },
};
</script>

<style lang="sass">
.form
    display: flex
    flex-direction: column
    gap: min(25px, 3vw)
    &__radiobuttons
        display: flex
        flex-direction: row
        align-items: center
        gap: min(50px, 5vw)
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
        padding-left: 20px
        font-size: min(20px, 5vw)
        height: min(50px, 12vw)
        border: none
        border-radius: min(10px, 2vw)
    &__label
        font-size: min(18px, 4vw)
    &__control
        display: flex
        flex-direction: row
        justify-content: space-between
        padding: 0 min(30px, 3vw)
        @media screen and (min-width: 768px)
            padding: 0
            justify-content: flex-end
            gap: 20px
    &__button
        border: none
        background: transparent
        border-radius: min(12px, 2vw)
        padding: 10px 20px
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
    &__error
        padding: 0
        margin: 0
        color: red
</style>
