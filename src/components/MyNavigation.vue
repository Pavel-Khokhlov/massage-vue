<template>
  <nav class="nav" :class="{ _active: isOpen }">
    <ul class="nav__list">
      <li v-for="link in links" :key="link.title">
        <a :href="`#${link.path}`" class="nav__link">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import menuLinks from "../data/menu.js";
export default {
  data() {
    return {
      links: menuLinks,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass">
@import ../sass/index
.nav
    position: relative
    top: 20vw
    left: -100vw
    opacity: 0
    transition: $app-transition05
    &._active
        transition: $app-transition05
        transition-delay: 0.5s
        left: 5vw
        opacity: 1
    &__list
        padding: 0
        list-style: none
        display: flex
        flex-direction: column
        gap: 4vw
    &__link
        font-size: 7vw
        text-decoration: none
        color: $base-black-color
</style>
