<template lang='pug'>
  form(method='post' action='' @submit.prevent='addThisWork()').work-block
    .header
      p.title Редактирование работы
    .body
      label.img-block
        input.img-loading(
          type='file'
          name='photo'
          @change='loadphoto()'
        )
        .img-content
          .img-preload(
            :class='{active: editWork.photo}'
            :style='{backgroundImage: editWork.photo}'
          )
            .img-text
              p.img-load-text Перетащите или загрузите для загрузки изображения
              div.btn-main
                span.btn-main__text Загрузить
      .information
        label.label
          span.input-name Название
          input.input(v-model='editWork.title' name='title')
        label.label
          span.input-name Ссылка
          input.input(v-model='editWork.link' name='link')
        label.label
          span.input-name Описание
          textarea.textarea(rows='4' name='description' v-model='editWork.description')
        label.label
          span.input-name Добавление тега
          input.input(v-model='editWork.techs' name='techs' @input='addTegs()')
        .tegs
          .teg(
            v-for='teg in tegs'
            :key='teg.id'
          )
            span.teg-name {{teg.name}}
            button.btn-icon.teg-delete(
              type='button'
              @click='tegDelete(teg.id)'
              )
              svg.icon-remove(preserveAspectRatio="none")
                use(xlink:href='sprite.svg#remove')
    .footer
      button.btn-cancel(
        type='button'
        @click='discard()'
        ) Отмена
      button.btn-main
        span.btn-main__text Сохранить

    message(
      v-if='responseMessage.check'
      :responseMessage='responseMessage'
      @closeMessage='responseMessage.check=false'
    )
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { verificationForm } from '../verification'

export default {
  data() {
    return {
      responseMessage: {
        check: false,
        type: '',
        text: ''
      },
      tegs: []
    }
  },
  computed: {
    ...mapState('works', {
      editWork: state => state.selectedWork
    }),
  },
  created() {
    this.addTegs();
  },
  methods: {
    ...mapMutations('works', ['CLEAR_SELECTEDWORK']),
    ...mapActions('works', ['addWork', 'changeWork']),

    loadphoto() {
      const fr = new FileReader();

      fr.readAsDataURL(event.target.files[0]);
      fr.addEventListener("load", () => {
        this.editWork.photo = `url(${fr.result})`;
      })
    },

    async addThisWork() {
      //TODO не работает изменение работы
      try {
        const thisVerificationForm = verificationForm(event.target);
        if (!thisVerificationForm) {
          return;
        }

        const form = event.target;
        const formData = new FormData(form);
        if (this.editWork.id) {
          await this.changeWork(formData);
        } else {
          await this.addWork(formData);
        }

        this.$emit('remove');
      } catch (error) {
        this.responseMessage.check=true;
        this.responseMessage.type='error';
        this.responseMessage.text = error.response.data.error || error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
      }
    },

    discard() {
      this.CLEAR_SELECTEDWORK();
      this.$emit('remove');
    },

    addTegs() {
      this.tegs.length=0;
      let arrayTegs = this.editWork.techs.split(',');
      arrayTegs.forEach((value, index) => {
        if (value && value !== ' ') {
          this.tegs.push({
            id: index,
            name: value
          })
        }
      })
    },

    tegDelete(id) {
      this.tegs = this.tegs.filter(teg => teg.id !== id);
      let tegsArray = [];
      this.tegs.forEach(value => {
        tegsArray.push(value.name);
      })
      this.editWork.techs = tegsArray.join(',');
    }
  }
}
</script>

<style lang="postcss" scoped>
  .work-block {
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
    flex-basis: 60%;
    @media (max-width: 767px) {
      flex-basis: 100%;
    }
  }
  .body {
    display: flex;
    align-items: flex-start;
    padding: 30px 0;
    @media (max-width:1199px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .img-block {
    position: relative;
    cursor: pointer;
    min-width: 50%;
    max-width: 50%;
    flex-basis: 50%;
    margin-right: 30px;
    @media (max-width:1199px) {
      min-width: 70%;
      max-width: 70%;
      flex-basis: 70%;
      margin-right: 0;
    }
    @media (max-width: 767px) {
      min-width: 100%;
      max-width: 100%;
      flex-basis: 100%;
    }
  }
  .img-loading {
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 5;

    &.error {
      & + .img-content .img-text {
        border-color: $error-color;
        color: $error-color;
      }
    }
  }
  .img-preload {
    position: relative;
    background-color: rgb(222, 228, 237);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 275px;

    &.active {
      .img-text {
        opacity: 0;
      }
    }
  }
  .img-text {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed #a1a1a1;
    transition: background, opacity .3s;
  }
  .img-load-text {
    line-height: 2;
    opacity: .5;
    text-align: center;
    max-width: 220px;
    margin-bottom: 24px;
  }
  .information {
    max-width: 50%;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width:1199px) {
      min-width: 80%;
      max-width: 80%;
      flex-basis: 80%;
      margin-top: 50px;
    }
    @media (max-width: 767px) {
      min-width: 100%;
      max-width: 100%;
      flex-basis: 100%;
      margin-top: 30px;
    }
  }
  .label {
    width: 100%;
    margin-bottom: 30px;
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
  .tegs {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
  .teg {
    display: flex;
    align-items: center;
    background-color: rgb(244, 244, 244);
    border-radius: 16px;
    padding: 10px 10px 10px 20px;
    margin: 0 5px;
  }
  .teg-name {
    font-size: 13px;
    line-height: 1;
    margin-right: 9px;
  }
  .teg-delete {
    line-height: 1;
    width: 11px;
    height: 11px;
  }
  .icon-remove {
    width: 11px;
    height: 11px;
    display: block;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    @media (max-width:1199px) {
      justify-content: center;
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
