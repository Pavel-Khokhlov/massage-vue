<template>
  <section class="section">
    <carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="1.2"
      :autoplay="5000"
      :wrap-around="true"
      :transition="500"
      :pauseAutoplayOnHover="true"
      :currentSlide="currentSlide"
    >
      <slide v-for="slide in slides" :key="slide.id + 20">
        <div class="carousel__stack">
          <div class="carousel__top">
            <div class="carousel__avatar"></div>
            <h3 class="carousel__title">{{ slide.name }}</h3>
          </div>
          <p class="carousel__text">{{ slide.feedback }}</p>
          <p class="carousel__contact">{{ slide.contact }}</p>
        </div>
      </slide>

      <template #addons>
        <button @click="prevSlide" class="carousel__button prev" />
        <button @click="nextSlide" class="carousel__button next" />
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
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
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
      return require(`../assets/images/mainCarousel/${path}.jpg`);
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
.carousel
    &__slide
        position: relative
        height: 70vh
        width: 100%
    &__stack
        height: 95%
        padding: 15px
        margin: 0 10px
        width: calc(100% - 20px)
        background: $base-white-color
        border-radius: 15px
        box-shadow: 2px 2px 11px rgba($base-black-color, 0.2)
        display: flex
        flex-direction: column
        gap: min(30px, 4vw)
    &__top
        display: flex
        align-items: center
    &__avatar
        width: 50px
        height: 50px
        border-radius: 25px
        background: #2c3e50
        background: -webkit-linear-gradient(to right, #3498db, #2c3e50)
        background: linear-gradient(to right, #3498db, #2c3e50)
        margin-right: min(30px, 6vw)
    &__title
        text-align: start
        font-size: min(26px, 6vw)
        color: $base-black-color
        // text-shadow: 1px 1px 2px rgba($base-black-color, 0.6)
        margin: 0
    &__text
        text-align: start
        font-size: min(18px, 4vw)
        color: $base-black-color
        // text-shadow: 1px 1px 2px rgba($base-black-color, 0.6)
        margin: 0
    &__contact
        text-align: end
        font-size: min(18px, 4vw)
        color: $base-black-color
        // text-shadow: 1px 1px 2px rgba($base-black-color, 0.6)
        margin: auto 0 0
    &__button
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
    &__pagination
        display: flex
        gap: 10px
        margin: min(20px, 3vw)
        padding: 0
    &__dot
        border: none
        background: rgba($base-black-color, 0.3)
        width: 8px
        height: 8px
        border-radius: 4px
        padding: 0
        transition: $app-transition03
        &._active
            transition: $app-transition03
            background: rgba($base-black-color, 1)
</style>
