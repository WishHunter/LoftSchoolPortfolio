<template lang="pug">
  .review
    .header
      img.user-photo(:src='userPhoto')
      .user-info
        p.user-name Владимир Сабанцев
        p.user-desc Преподаватель
    .body
      p.review-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
    .footer
      button.btn-icon.review__btn(type='button')
        span.btn-text Править
        svg.icon-edit(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#pencil')
      button.btn-icon.review__btn(type='button')
        span.btn-text Удалить
        svg.icon-remove(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#remove')

</template>


<script>
export default {
  data() {
    return {
      userPhoto: 'review1.png'
    }
  },
  methods: {
    requiredImg(photo) {
			return require(`../../images/content/${photo}`);
		}
  },
  created() {
    this.userPhoto = this.requiredImg(this.userPhoto);
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
