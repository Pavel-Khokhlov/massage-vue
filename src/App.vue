<template>
  <my-header />
  <main-carousel :slides="slides" />
  <my-about />
  <my-services />
  <my-feedbacks />
  <my-contacts />
  <my-faq />
  <my-footer />
  <my-menu-modal :isOpen="$store.state.isMenuOpen" />
</template>

<script>
import slides from "./data/mainCarousel.js";
export default {
  name: "App",
  data() {
    return {
      slides: slides,
    };
  },
};
</script>

<style lang="sass">
*
  -webkit-tap-highlight-color: transparent
.section
  margin-bottom: min(50px, 10vw)
  padding: min(50px, 5vw) min(200px, 5vw)
  &.service
    // background: rgb(242, 242, 242)
    width: min(1000px, 100%)
    margin: 0 auto
    padding-top: min(50px, 10vw)
    padding-bottom: min(50px, 10vw)
    box-sizing: border-box
  &.feedbacks
    background: url('./assets/images/backgrounds/feedbacksV.webp')
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    padding: min(50px, 5vw) 0
    @media screen and (min-width: 768px)
      background: url('./assets/images/backgrounds/feedbacksH.webp')
      background-repeat: no-repeat
      background-position: center
      background-size: cover
  &__title
    margin: 0 auto
    font-size: min(40px, 6vw)
    line-height: 1.3
    &.service
      margin-bottom: min(40px, 6vw)
    &.feedbacks
      padding-left: min(50px, 5vw)
      color: white
      @media screen and (min-width: 768px)
        padding-left: 0
    @media screen and (min-width: 768px)
      text-align: center
  &__subtitle
    font-size: min(28px, 4.5vw)
    line-height: 1.3
    font-weight: 400
  &__text
    font-size: min(20px, 4.5vw)
    line-height: 1.3
    padding: min(40px, 5vw) 0
    margin: 0
    &.feedbacks
      color: white
      width: min(600px, 90vw)
      margin: 0 auto
</style>
