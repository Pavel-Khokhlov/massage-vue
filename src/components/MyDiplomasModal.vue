<template>
  <section
    class="diplomas-modal"
    :class="{ _active: isOpen }"
    :on:click="handleClose"
  >
    <!-- <my-navigation :isOpen="isOpen"/> -->
    <button class="diplomas-modal__close" :on:click="handleClose">
      <img
        :src="close"
        alt="кнопка закрыть модалку"
        class="diplomas-modal__close-icon"
      />
    </button>
    <img
      alt="изображение сертификат"
      class="diplomas-modal__image"
      :src="`${images[`${$store.state.currentDiploma}`]}`"
      @click.stop=""
    />
    <!-- <div class="carousel">
      <carousel
        ref="carousel"
        v-model="currentSlide"
        :items-to-show="itemsToShow"
        :autoplay="0"
        :wrap-around="true"
        :transition="500"
        :pauseAutoplayOnHover="true"
        :currentSlide="currentSlide"
      >
        <slide
          v-for="slide in slides"
          :key="slide.id"
          class="carousel__slide"
          :style="{
            backgroundImage: `url(${images[`${slide.img}`]})`,
          }"
        >
        </slide>
      </carousel>
    </div> -->
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import close from "../assets/images/icons/close.svg";
import images from "../assets/images/diplomasCarousel/index";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      itemsToShow: 1,
      images: images,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      close,
    };
  },
  methods: {
    handleClose() {
      this.$store.state.isDiplomasOpen = false;
      setTimeout(() => {
        this.$store.state.currentDiploma = "";
      }, 800);
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../sass/index
.diplomas-modal
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: rgba($base-black-color, 0.8)
  opacity: 0
  pointer-events: none
  z-index: 10
  transition: $app-transition05
  transition-delay: 0.3s
  &._active
    transition: $app-transition05
    pointer-events: all
    opacity: 1
  &__close
    background: transparent
    border: none
    margin-bottom: min(30px, 6vw)
    cursor: pointer
    &-icon
      width: min(30px, 6vw)
      height: min(30px, 6vw)
  &__image
    max-width: 90vw
    max-height: 90vh
.carousel
  position: relative
  width: 90vw
  height: 300px
  background: white
  &__slide
    width: 80%
    height: 200px
    background: grey
</style>
