<template>
  <my-header />
  <!-- <h2>App</h2> -->
  <main-carousel :slides="slides" />
  <my-about />
  <my-massage />
  <my-pravilo />
  <my-kinezio />
  <my-sadhu />
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
.section
  margin-bottom: min(50px, 10vw)
  &__title
    margin: 0 auto
    padding-left: 15px
  &__text
    padding: 15px
</style>
