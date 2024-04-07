<template>
  <section class="section service">
    <h2 class="section__title service">Мои услуги</h2>
    <div class="service__list">
      <div
        v-for="service in services"
        :key="service.id"
        class="service__block"
        :class="{ _active: currentBlock === service.id }"
      >
        <button
          type="button"
          :name="service.id"
          class="service__button"
          @click="handleClick(service.id)"
        >
          <h2 class="service__title">{{ service.title }}</h2>
          <img
            src="../assets/images/icons/chevron.svg"
            alt="иконка список"
            class="service__icon"
            :class="{ _active: currentBlock === service.id }"
          />
        </button>
        <p class="section__text">{{ service.text_one }}</p>
        <h3 class="section__subtitle">Показания:</h3>
        <ul class="service__list" v-if="service.indications">
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
import services from "../data/dataServices.js";
export default {
  data() {
    return {
      services: services,
      currentBlock: "",
    };
  },
  methods: {
    handleClick(id) {
      if (this.currentBlock === id) {
        this.currentBlock = "";
      } else {
        this.currentBlock = id;
      }
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
    &__block
        background: $base-white-color
        height: min(70px, 12vw)
        transition: all 0.5s ease
        border-radius: 10px
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1)
        overflow: hidden
        padding: 0 min(20px, 3vw)
        &._active
            height: auto
            transition: all 0.5s ease
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
    &__text
        font-size: min(20px, 4vw)
        line-height: 1.3
</style>
