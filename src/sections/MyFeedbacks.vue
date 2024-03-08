<template>
  <section class="section">
    <h2 class="section__title">Отзывы</h2>
    <p class="section__text">
      Благодарю всех вас за оказанное мне доверие, за то, что не сомневаетесь во
      мне. Мне безумно приятно получать от вас слова благодарности. От всей души
      спасибо вам!<br><br>С&nbsp;уважением&nbsp;Павел.
    </p>
    <feedbacks-carousel :slides="feedbacks" />
  </section>
</template>

<script>
import feedbacks from "../data/feedbacksCarousel.js";
export default {
  name: "App",
  data() {
    return {
      feedbacks: feedbacks,
    };
  },
};
</script>
