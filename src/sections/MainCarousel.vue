<template>
  <section class="section" id="911356">
    <carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="1"
      :autoplay="$store.state.isMenuOpen || $store.state.isDiplomasOpen ? 0 : 5000"
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
          backgroundImage: `url(${images[`${slide.path}`]})`
        }"
      >
        <div class="carousel__info">
          <h1 class="carousel__title">{{ slide.title }}</h1>
          <p class="carousel__text">{{ slide.text }}</p>
          <button type="button" class="carousel__button">Записаться</button>
        </div>
      </slide>

      <template #addons>
        <button @click="prevSlide" class="carousel__nav prev">
          <img :src="arrowPrev" alt="my-logo" class="carousel__nav-icon" />
        </button>
        <button @click="nextSlide" class="carousel__nav next">
          <img :src="arrowNext" alt="my-logo" class="carousel__nav-icon" />
        </button>
        <div class="carousel__pagination">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            type="button"
            class="carousel__dot"
            :class="{ _active: currentSlide === index }"
            @click="handleClickPage(index)"
          ></button>
        </div>
      </template>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import images from "../assets/images/mainCarousel/index";
import arrowPrev from "../assets/images/icons/arrowPrev.svg";
import arrowNext from "../assets/images/icons/arrowNext.svg";
export default {
  components: {
    Carousel,
    Slide,
  },
  setup() {
    return {
      arrowPrev,
      arrowNext,
    };
  },
  data() {
    return {
      currentSlide: 0,
      images: images,
    };
  },
  props: {
    slides: {
      type: Array,
    },
  },
  methods: {
    handleClickPage(value) {
      this.currentSlide = value;
    },
    getImage(path) {
      return require(`../assets/images/mainCarousel/${path}.webp`);
    },
    nextSlide() {
      this.currentSlide += 1;
    },
    prevSlide() {
      this.currentSlide -= 1;
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../sass/index
.section
    position: relative
    margin: 0 -min(50px, 3vw)
    padding: 0
.carousel
    &__slide
        position: relative
        height: calc(100vh - $header-height)
        width: 100%
        background-position: center
        background-size: cover
    &__image
        width: 100%
        height: 100%
    &__info
        position: absolute
        bottom: 33%
        left: 50%
        transform: translate(-50%, 100%)
        width: min(400px, 90vw)
        background-color: rgba($base-white-color, 0.6)
        padding: min(15px, 3vw)
        border-radius: 10px
        box-shadow: 2px 2px 4px rgba($base-black-color, 0.3)
        display: flex
        flex-direction: column
        gap: min(30px, 2vw)
        border: 1px solid rgba($base-white-color, 0.5)
    &__title
        text-align: start
        font-family: 'RobotoCondensed'
        font-weight: 500 
        font-size: min(34px, 6vw)
        color: $base-black-color
        // text-shadow: 1px 1px 2px rgba($base-black-color, 0.6)
        margin: 0
    &__text
        text-align: start
        font-size: min(18px, 4vw)
        color: $base-black-color
        // text-shadow: 1px 1px 2px rgba($base-black-color, 0.6)
        margin: 0
    &__button
        align-self: flex-end
        width: 60%
        height: min(50px, 12vw)
        border: none
        border-radius: 6px
        background: #2c3e50
        background: -webkit-linear-gradient(to right, #3498db, #2c3e50)
        background: linear-gradient(to right, #3498db, #2c3e50)
        font-family: 'RobotoCondensed'
        font-weight: 400 
        font-size: min(20px, 5vw)
        color: $base-white-color
        box-shadow: 2px 2px 4px rgba($base-black-color, 0.3)
        margin-top: min(100px, 3vw)
    &__nav
        position: absolute
        top: 0
        width: 10%
        height: 100%
        background: transparent
        border: none
        &.next
            right: 0
        &.prev
            left: 0
        &-icon
            width: 20px
            height: 20px
    &__pagination
        position: absolute
        display: flex
        gap: 10px
        bottom: 3vw
        right: 50%
        transform: translate(50%, 0)
        margin: 0
        padding: 0
    &__dot
        border: none
        background: rgba($base-white-color, 0.3)
        width: 8px
        height: 8px
        border-radius: 4px
        padding: 0
        transition: $app-transition03
        &._active
            transition: $app-transition03
            background: rgba($base-white-color, 1)
</style>
