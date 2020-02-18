<template lang="pug">
  section.section.aboutMe
    .container
      .header
        h2.section-title Блок "Обо мне"
        button.addGroup(type="button" @click='newCategory = true')
          span.icon-add.addGroup__icon +
          | Добавить группу
      .section-content
        SkillsBlockEdit(
          v-if='newCategory'
          @remove='newCategory = false'
        )
        SkillsBlock(
          v-for='category in categories'
          :key='category.id'
          :category='category'
        )

</template>

<script>
  import SkillsBlock from '../skills';
  import SkillsBlockEdit from '../skillsEdit';
  import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      SkillsBlock,
      SkillsBlockEdit
    },
    data() {
      return {
        newCategory: false
      }
    },
    computed: {
      ...mapState('categories', {
        categories: state => state.categories
      })
    },
    created() {
      //TODO Как повесить обработчик ошибок сюда?
      this.viewCategories(),
      this.viewSkills();
    },
    methods: {
      ...mapActions('categories', ['viewCategories', 'viewSkills'])
    },
  }
</script>

<style lang="postcss" scoped>
  .header {
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  .addGroup {
    display: flex;
    border: none;
    background: none;
    color: #383bcf;
    cursor: pointer;
    margin-left: 60px;
    @media (max-width: 767px) {
      margin-left: 0;
    }
  }
  .addGroup__icon {
    font-size: 15px;
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  .section-content {
    display: grid;
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
    grid-gap: 32px;

    @media (max-width: 767px) {
      grid-template-columns: minmax(0%, 1fr);
    }
  }
</style>
