<template>
  <section class="section" id="911361">
    <h2 class="section__title">Обо мне</h2>
    <!-- <diplomas-carousel :slides="diplomas" /> -->
    <div class="about__certificates">
      <button
        v-for="thumb in diplomas"
        :key="thumb.id"
        class="about__button"
        :style="{
          backgroundImage: `url(${require('../assets/images/diplomasCarousel/thumb/' +
            `${thumb.img}.webp`)})`,
        }"
      ></button>
    </div>
  </section>
</template>

<script>
import diplomas from "../data/dataDiplomas.js";
export default {
  data() {
    return {
      diplomas: diplomas,
    };
  },
};
</script>

<style lang="sass">
.about
  &__certificates
    display: flex
    justify-content: center
    gap: min(50px, 5vw)
    overflow-x: auto
    scroll-behavior: smooth
    width: 100%
    box-sizing: border-box
    padding: min(10px, 2vw)
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none
    @media screen and (max-width: 768px)
      justify-content: flex-start
      width: 100vw
      margin: 0 min(-20px, -5vw)
  &__button
    border: none
    background: transparent
    width: min(120px, 16vw)
    height: min(120px, 16vw)
    border-radius: min(20px, 2vw)
    background-position: center
    background-size: cover
    padding: 0
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)
    cursor: pointer
    flex-shrink: 0
    transition: all 0.5s ease
    &:hover
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35)
</style>
