<template lang="pug">
  .skills-block
    .header
      input.title(
        placeholder="Название новой группы"
        v-model="title"
      )
      button.btn-icon.skill__btn(type='button' @click='newHeader()')
          svg.icon-tick(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#tick')
      button.btn-icon.skill__btn(type='button' @click="$emit('remove')")
          svg.icon-remove(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#remove')
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        editHeader: false,
        title: ''
      }
    },
    methods: {
      ...mapActions('categories', ['addCategory']),

      async newHeader() {
        try {

          await this.addCategory(this.title);
          this.$emit('remove');

        } catch (error) {
          console.log(error);
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
