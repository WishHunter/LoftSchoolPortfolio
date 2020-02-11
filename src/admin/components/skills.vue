<template lang="pug">
  .skills-block
    .header(
      v-if="editHeader"
    )
      input.title(
        placeholder="Название группы"
        v-model="title"
      )
      button.btn-icon.skill__btn(type='button' @click='newHeader()')
          svg.icon-tick(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#tick')
      button.btn-icon.skill__btn(type='button' @click='deleteThisCategory()')
          svg.icon-remove(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#remove')
    .header(
      v-else
    )
      p.title {{ category.category }}
      button.btn-icon.skill__btn(type='button' @click='editHeader = true')
          svg.icon-edit(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#pencil')
    .body
      skill(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )

    .footer
      input.skill__name(placeholder="Новый навык" v-model='newSkill.title')
      div.skill__percent
        input.skill__percent.input(value="100" v-model='newSkill.percent')
      button.btn-icon(type="button" @click='addNewSkill()')
        span.icon-add.addGroup__icon +
</template>


<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      skill: () => import('./skill')
    },
    props: {
      category: Object
    },
    data() {
      return {
        editHeader: false,
        title: '',
        newSkill: {
          title: '',
          percent: '100',
          category: this.category.id
        }
      }
    },
    created() {
      this.title = this.category.category
    },
    computed: {
      ...mapState('categories', {
        skills: function(state) {
          return state.skills.filter(skill => skill.category === this.category.id)
        }
      })
    },
    methods: {
      ...mapActions('categories', ['editCategory', 'deleteCategory', 'addSkill']),

      async newHeader() {
        try {

          await this.editCategory([this.category.id, this.title]);
          this.editHeader = false;

        } catch (error) {
          console.log(error);

        }
      },

      async deleteThisCategory() {
        try {
          await this.deleteCategory(this.category.id);
        } catch (error) {

        }
      },

      async addNewSkill() {
        try {
          await this.addSkill(this.newSkill);
          this.newSkill.title = '';
          this.newSkill.percent = '100';
        } catch (error) {

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
  .icon-edit {
    fill: #414c63;
  }
  .icon-trash {
    fill: #414c63;
  }
  .icon-tick {
    fill: #00d70a;
  }
  .icon-remove {
    fill: #bf2929;
  }
  .body {
    padding: 30px 0;
    margin-bottom: 15px;
  }

  .skill {
    padding: 8px 0;
    display: flex;
    align-items: center;
    width: 100%;

    &__name {
      padding: 5px;
      flex-grow: 1;
    }

    &__percent {
      position: relative;
      min-width: 65px;
      max-width: 65px;
      margin: 0 10px 0 20px;
      padding: 5px 30px 5px 5px;

      div& {
        padding: 0;
      }
      input& {
        margin: 0;
      }
      &:after {
        content: '%';
        position: absolute;
        opacity: .7;
        right: 10px;
        bottom: 5px;
      }
    }
  }

  .footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    margin-left: auto;
    @media (max-width:1199px) {
      width: 100%;
    }
  }
  .addGroup__icon {
    width: 40px;
    height: 40px;
  }

  .btn-icon {
    margin-left: 20px;
    @media (max-width:1199px) {
      margin-left: 10px;
    }
  }
</style>
