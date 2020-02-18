<template lang="pug">
  .skills-block
    form.header(@submit.prevent='newHeader()')
      input.title(
        placeholder="Название новой группы"
        v-model="title"
      )
      button.btn-icon.skill__btn
          svg.icon-tick(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#tick')
      button.btn-icon.skill__btn(type='button' @click="$emit('remove')")
          svg.icon-remove(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#remove')
    message(
      v-if='responseMessage.check'
      :responseMessage='responseMessage'
      @closeMessage='responseMessage.check=false'
    )
</template>

<script>
  import { mapActions } from 'vuex';
  import { verificationForm } from '../verification'

  export default {
    components: {
      message: () => import('./error')
    },
    data() {
      return {
        responseMessage: {
          check: false,
          type: '',
          text: ''
        },
        editHeader: false,
        title: ''
      }
    },
    methods: {
      ...mapActions('categories', ['addCategory']),

      async newHeader() {
        try {
          const form = verificationForm(event.target);
          if (!form) {
            return;
          }

          await this.addCategory(this.title);
          this.$emit('remove');

        } catch (error) {

          this.responseMessage.check=true;
          this.responseMessage.type='error';

          if (error.response.data.message) {
            this.responseMessage.text='Не все поля заполнены';
          } else if(error.response.data.error) {
            this.responseMessage.text = error.response.data.error;
          }
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .skills-block {
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

    @media (max-width:1199px) {
      flex-basis: auto;
    }
  }
  .icon-tick {
    fill: #00d70a;
  }
  .icon-remove {
    fill: #bf2929;
  }
  .body {
    padding: 30px 0;
  }
  .btn-icon {
    margin-left: 20px;
    @media (max-width:1199px) {
      margin-left: 10px;
    }
  }
</style>
