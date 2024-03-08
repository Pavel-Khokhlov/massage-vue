<template>
  <header class="header">
    <h2 class="header__logo">П</h2>
    <my-burger />
  </header>
</template>

<style lang="sass">
@import ../sass/index
.header
  position: sticky
  top: 0
  display: flex
  justify-content: space-between
  align-items: center
  max-width: 1000px
  height: $header-height
  padding: 0 min(50px, 3vw)
  z-index: 6
  background: $base-white-color
  &__logo
    font-family: 'PacificoRegular'
    font-weight: 700
    font-size: 25px
    margin: 0
    padding: 0
</style>
