<template lang="pug">
  section.section.works
    .container
      h2.section-title Блок "Работы"
      .section-content
        .fullBlock(
          v-if='openEditWork'
        )
          WorksEdit
        .block
          button.addWork(type="button" @click='openEditWork=true')
            .icon-plus +
            p.text Добавить работу
        .block
          Work
</template>

<script>
import WorksEdit from '../worksEdit'
import Work from '../work'

export default {
  components: {
    WorksEdit,
    Work
  },
  data() {
    return {
      openEditWork: false
    }
  }
}
</script>

<style lang="postcss" scoped>
  .section-content {
    margin-top: 60px;
    display: grid;
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr);
    grid-gap: 32px;
    @media (max-width:1199px) {
      grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: minmax(0%, 1fr);
      grid-gap: 10px;
    }
  }
  .fullBlock {
    grid-column: 1/4;
    @media (max-width:1199px) {
      grid-column: 1/3;
    }
    @media (max-width: 767px) {
      grid-column: 1/2;
    }
  }
  .addWork {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    min-height: 400px;
    background-image: linear-gradient(90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
    @media (max-width: 767px) {
      flex-direction: row;
      padding: 30px 20px;
    }
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
    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
      font-size: 24px;
      margin: 0 20px 0 0;
    }
  }
  .text {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    line-height: 1.667;
    text-align: center;
    width: 150px;
    @media (max-width: 767px) {
      width: auto;
    }
  }
</style>
