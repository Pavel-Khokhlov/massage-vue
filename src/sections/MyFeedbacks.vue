<template>
  <section class="section feedbacks">
    <h2 class="section__title feedbacks">Отзывы</h2>
    <p class="section__text feedbacks">
      Благодарю вас за оказанное мне доверие. Мне очень приятно получать от вас
      обратную связь. Благодарю от всей души! С&nbsp;уважением&nbsp;Павел.
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

<style lang="sass">
</style>
