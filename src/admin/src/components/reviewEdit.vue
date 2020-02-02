<template lang='pug'>
  form(method='post' action='').review-block
    .header
      p.title Новый отзыв
    .body
      .img-block
        .img-container
          img.photo(:src='editPhoto')
        label.label-add-photo
          input.input-add-photo(type='file')
          span.span-add-photo Добавить фото
      .information
        label.label
          span.input-name Имя автора
          input.input(value='Ковальчук Дмитрий')
        label.label
          span.input-name Титул автора
          input.input(value='Основатель LoftSchool')
        label.fullLabel
          span.input-name Отзыв
          textarea.textarea(rows='3') Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
    .footer
      button.btn-cancel(type='button') Отмена
      button.btn-main
        span.btn-main__text Сохранить
</template>

<script>
export default {
  data() {
    return {
      editPhoto: 'no-photo.jpg'
    }
  },
  methods: {
    requiredImg(photo) {
			return require(`../../../images/content/${photo}`);
		}
  },
  created() {
    this.editPhoto = this.requiredImg(this.editPhoto);
  }
}
</script>

<style lang="postcss" scoped>
  .review-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
    background-color: #fff;
    box-shadow:4px 3px 20px 0px rgba(0, 0, 0,0.07);
  }
  .header {
    padding-bottom: 15px;
    display: flex;
    border-bottom: 1px solid rgba(#1f232d, .15);
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-right: auto;
    flex-basis: 100%;
  }
  .body {
    display: flex;
    align-items: flex-start;
    padding: 30px 0 15px;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .img-block {
    position: relative;
    margin-right: 30px;
  }
  .img-container {
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    margin-bottom: 28px;
  }
  .photo {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 100%;
    transform: translate(-50%, -50%)
  }
  .label-add-photo {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .input-add-photo {
    display: none;
  }
  .span-add-photo {
    text-align: center;
    color: #383bcf;
    font-weight: 600;
    cursor: pointer;
  }
  .information {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }
  .label {
    max-width: 50%;
    flex-basis: 50%;
    margin-bottom: 30px;
    padding-right: 30px;
    @media (max-width:1199px) {
      max-width: 100%;
      flex-basis: 100%;
      padding-right: 60px;
    }
    @media (max-width: 767px) {
      padding-right: 0;
    }
  }
  .fullLabel {
    max-width: 100%;
    flex-basis: 100%;
    padding-right: 30px;
    @media (max-width: 767px) {
      padding-right: 0;
    }
  }
  .input-name {
    font-weight: 600;
    opacity: .5;
  }
  .input {
    display: block;
    width: 100%;
    padding: 16px 0;
  }
  .textarea {
    display: block;
    width: 100%;
    padding: 16px;
    margin-top: 16px;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 30px;
    @media (max-width: 767px) {
      margin-right: 0;
    }
  }
  .btn-cancel {
    padding: 0;
    background: none;
    border: none;
    color: #383bcf;
    margin-right: 60px;
    font-weight: 600;
    cursor: pointer;
  }
</style>
