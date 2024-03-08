<template>
  <footer class="footer">
    <p class="footer__copyright">
      @ 2016-{{ getCurrentYear() }} Copyright by Pavel&Co
    </p>
    <p class="footer__copyright">Version: {{ VERSION_APP }}</p>
  </footer>
</template>

<script>
import version from "../../package.json";
export default {
  data() {
    return {
      VERSION_APP: version.version,
      CURRENT_YEAR: 0,
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
  margin: 0 min(50px, 3vw) min(50px, 5vw)
  &__copyright
    font-family: 'Jura'
    font-size: min(16px, 3vw)
    color: $base-grey-color
    margin: 0
    padding: 0
</style>
