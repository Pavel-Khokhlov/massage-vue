<template>
  <section class="section">
    <h2 class="section__title">Отзывы</h2>
    <p class="section__text">
      Благодарю вас за оказанное мне доверие. Мне очень приятно получать от вас
      обратную связь. Благодарю от всей души!<br /><br />С&nbsp;уважением&nbsp;Павел.
    </p>
    <feedbacks-carousel :slides="feedbacks" />
  </section>
</template>

<script>
import feedbacks from "../data/dataFeedbacks.js";
export default {
  data() {
    return {
      feedbacks: feedbacks,
    };
  },
};
</script>

<style lang="sass" scoped>
.section
  background: url('../assets/images/backgrounds/feedbacks.webp')
  background-position: center
  background-size: cover
  padding: min(50px, 5vw) 0
  &__title
    color: white
  &__text
    color: white
</style>
