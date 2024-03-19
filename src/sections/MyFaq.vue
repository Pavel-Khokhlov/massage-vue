<template>
  <section class="section">
    <h2 class="section__title">Вопрос-Ответ</h2>
    <ul class="faq__list">
      <li v-for="faq in faqs" :key="faq.id" class="faq__item">
        <p class="faq__text question">{{ faq.question }}</p>
        <p class="faq__text answer">{{ faq.answer }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import faqs from "../data/dataFaqs.js";
export default {
  data() {
    return {
      faqs: faqs,
    };
  },
};
</script>

<style lang="sass">
@import ../sass/index
.faq
    box-sizing: border-box
    margin: 0 -15px
    &__list
        list-style: none
        margin: min(50px, 10vw) 0
        padding: 0 5px
        display: flex
        flex-direction: column
        gap: min(30px, 5vw)
        box-sizing: border-box
    &__item
        display: flex
        flex-direction: column
        gap: min(30px, 5vw)
    &__text
        position: relative
        padding: 10px 15px
        max-width: 60vw
        // box-shadow: 2px 2px 4px rgba(0,0,0,0.2)
        &.question
            margin: 0 0 0 10px
            font-size: min(24px, 5vw)
            background-color: rgba(blue, 0.5)
            color: white
            border-radius: 15px 15px 15px 0
            &::before
                content: ''
                position: absolute
                bottom: 0
                left: -10px
                width: 10px
                height: 10px
                background-color: rgba(blue, 0.5)
            &::after
                content: ''
                position: absolute
                bottom: 0
                left: -10px
                width: 10px
                height: 20px
                background-color: $base-white-color
                border-radius: 0 0 10px 0
                border: none
        &.answer
            margin: 0 10px 0 0
            font-size: min(20px, 4vw)
            max-width: 80vw
            background-color: rgba(grey, 0.1)
            color: black
            border-radius: 15px 15px 0 15px
            align-self: flex-end
            &::before
                content: ''
                position: absolute
                bottom: 0
                right: -10px
                width: 10px
                height: 10px
                background-color: rgba(grey, 0.1)
            &::after
                content: ''
                position: absolute
                bottom: 0
                right: -10px
                width: 10px
                height: 20px
                background-color: $base-white-color
                border-radius: 0 0 0 10px
                border: none
</style>
