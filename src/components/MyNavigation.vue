<template>
  <nav class="nav" :class="{ _active: isOpen }">
    <ul class="nav__list">
      <li v-for="link in links" :key="link.title">
        <a
          :href="`#${link.path}`"
          class="nav__link"
          @click="handleClickLink(link.id)"
          >{{ link.title }}</a
        >
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
  methods: {
    handleClickLink(id) {
      this.$store.state.services = this.$store.state.services.map((s) => {
        if (s.id === id) {
          return (s = { ...s, isOpened: true });
        } else {
          return (s = { ...s, isOpened: false });
        }
      });
      this.$store.state.isMenuOpen = false;
      this.$store.state.currentScrollPosition = id;
      const headerHeight = document.getElementById('header').clientHeight;
      let offset = 10;
      const container = document.getElementById(id);
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = container.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - headerHeight - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
