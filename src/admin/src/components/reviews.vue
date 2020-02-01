<template lang="pug">
  section.section.reviews
    .container
      h2.section-title Блок "Отзывы"
      .section-content
        .fullBlock
          ReviewsEdit
        .block
          button.addReview(type="button")
            .icon-plus +
            p.text Добавить отзыв
        .block
          Review
        .block
          Review
        .block
          Review
</template>

<script>
import ReviewsEdit from './reviewEdit'
import Review from './review'

export default {
  components: {
    ReviewsEdit,
    Review
  }
}
</script>

<style lang="postcss" scoped>
  .section-content {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
  }
  .fullBlock {
    grid-column: 1/4;
  }
  .addReview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
  }
  .icon-plus {
    width: 150px;
    height: 150px;
    border: 1px solid #fff;
    border-radius: 100%;
    display: flex;
    font-size: 72px;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    margin-bottom: 30px;
  }
  .text {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    line-height: 1.667;
    text-align: center;
    width: 150px;
  }
</style>
