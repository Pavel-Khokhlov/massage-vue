<template>
  <section class="section service">
    <h2 class="section__title service">Мои услуги</h2>
    <div class="service__list">
      <div
        v-for="service in $store.state.services"
        :key="service.id"
        class="service__block"
        :class="{ _active: service.isOpened }"
      >
        <button
          type="button"
          :id="service.id"
          :name="service.id"
          class="service__button"
          @click="handleServiceClick(service.id)"
        >
          <h2 class="service__title">{{ service.title }}</h2>
          <img
            src="../assets/images/icons/chevron.svg"
            alt="иконка список"
            class="service__icon"
            :class="{ _active: service.isOpened }"
          />
        </button>
        <p class="section__text">{{ service.text_one }}</p>
        <img
          :src="`${images[`${service.image}`]}`"
          alt="изображение кинезио"
          class="service__image"
        />
        <h3 class="section__subtitle">Показания:</h3>
        <ul class="service__list">
          <li
            v-for="item in service.indications"
            :key="item"
            class="service__list_item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import images from "../assets/images/services/index";
export default {
  data() {
    return {
      active: [],
      images: images,
    };
  },
  methods: {
    handleServiceClick(id) {
      this.$store.state.services = this.$store.state.services.map((s) => {
        if (s.id === id) {
          return (s = { ...s, isOpened: !s.isOpened });
        } else {
          return s;
        }
      });
    },
  },
};
</script>

<style lang="sass">
@import ../sass/index
.service
    &__list
        display: flex
        flex-direction: column
        gap: min(30px, 6vw)
        &_item
            font-size: min(20px, 5vw)
    &__block
        background: $base-white-color
        height: min(70px, 12vw)
        transition: all 0.5s ease
        border-radius: 10px
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1)
        overflow: hidden
        padding: 0 min(40px, 3vw)
        &._active
            height: auto
            transition: all 0.5s ease
            padding-bottom: min(30px, 5vw)
    &__button
        width: 100%
        height: min(70px, 12vw)
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        border: none
        background: transparent
        cursor: pointer
        padding: 0
    &__title
        margin: 0
        font-size: min(30px, 5vw)
        font-weight: 400
    &__icon
        transition: all 0.5s ease
        &._active
            transform: rotate(180deg)
            transition: all 0.5s ease
    &__image
        display: block
        width: min(400px, 100%)
        margin: 0 auto
        border-radius: min(20px, 2vw)
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)
    &__text
        font-size: min(20px, 4vw)
        line-height: 1.3
</style>
