<template>
  <footer class="footer">
    <p class="footer__copyright">
      @ 2016-{{ getCurrentYear() }} Copyright by Pavel&Co
    </p>
    <p class="footer__copyright">Version: {{ VERSION_APP }}</p>
  </footer>
</template>

<script>
import packageJson from "../../package.json";
export default {
  data() {
    return {
      VERSION_APP: packageJson.version,
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="sass">
@import ../sass/index
.footer
  display: flex
  justify-content: space-between
  margin: min(50px, 5vw) min(50px, 3vw)
  &__copyright
    font-family: 'RobotoCondensed'
    font-size: min(16px, 3vw)
    color: $base-grey-color
    margin: 0
    padding: 0
</style>
