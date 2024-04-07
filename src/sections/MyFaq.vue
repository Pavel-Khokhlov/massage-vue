<template>
  <section class="section faq">
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
    margin: 0
    background-color: rgb(242, 242, 242)
    &__list
        list-style: none
        margin: min(50px, 10vw) 0 0
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
        &.question
            margin: 0 0 0 10px
            font-size: min(24px, 5vw)
            background-color: rgba(blue, 0.5)
            color: white
            border-radius: 15px 15px 15px 0
            max-width: min(700px, 60vw)
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
                background-color: rgb(242, 242, 242)
                border-radius: 0 0 10px 0
                border: none
        &.answer
            margin: 0 10px 0 0
            font-size: min(20px, 4vw)
            max-width: min(900px,80vw)
            background-color: rgba(white, 1)
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
                background-color: rgba(white, 1)
            &::after
                content: ''
                position: absolute
                bottom: 0
                right: -10px
                width: 10px
                height: 20px
                background-color: rgb(242, 242, 242)
                border-radius: 0 0 0 10px
                border: none
</style>
