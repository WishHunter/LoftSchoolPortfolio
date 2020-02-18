<template lang="pug">
  .review
    .header
      img.user-photo(:src='`https://webdev-api.loftschool.com/${review.photo}`')
      .user-info
        p.user-name {{ review.author }}
        p.user-desc {{ review.occ }}
    .body
      p.review-text {{ review.text }}
    .footer
      button.btn-icon.review__btn(type='button' @click='editThisReview')
        span.btn-text Править
        svg.icon-edit(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#pencil')
      button.btn-icon.review__btn(type='button' @click='deleteThisReview')
        span.btn-text Удалить
        svg.icon-remove(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#remove')
    message(
      v-if='responseMessage.check'
      :responseMessage='responseMessage'
      @closeMessage='responseMessage.check=false'
    )
</template>


<script>
import {mapActions, mapMutations} from 'vuex';

export default {
  components: {
    message: () => import('./error')
  },
  props: {
    review: Object
  },
  data() {
    return {
      responseMessage: {
        check: false,
        type: '',
        text: ''
      },
    }
  },
  methods: {
    ...mapActions('reviews', ['deleteReview']),
    ...mapMutations('reviews', ['CHANGE_REVIEW']),

    async deleteThisReview() {
      try {
        await this.deleteReview(this.review.id);
      } catch (error) {
        this.responseMessage.check=true;
        this.responseMessage.type='error';
        this.responseMessage.text = error.response.data.error || error.response.data.message;
      }
    },

    editThisReview() {
      this.CHANGE_REVIEW(this.review);
      this.$emit('editReview');
    },
  }
}
</script>

<style lang="postcss" scoped>
  .review {
    padding: 30px;
    background-color: #ffffff;
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(#1f232d, .15);
  }
  .user-photo {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 20px;
  }
  .user-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .user-desc {
    opacity: .5;
  }
  .body {
    padding: 30px 0 45px;
  }
  .review-text {
    font-weight: 600;
    opacity: .7;
    line-height: 1.875;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .review__btn {
    display: flex;
    align-items: center;
  }
  .btn-text {
    color: rgba(65, 76, 99, 0.5);
    margin-right: 10px;
  }
  .icon-edit {
    fill: #383bcf;
  }
  .icon-remove {
    fill: #c92e2e;
  }
</style>
