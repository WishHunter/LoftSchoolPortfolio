<template lang="pug">
  .skills-block
    form.header(
      v-if="editHeader"
      @submit.prevent='newHeader()'
    )
      input.title(
        type='text'
        placeholder="Название группы"
        v-model="title"
      )
      button.btn-icon.skill__btn
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

    form.footer( @submit.prevent='addNewSkill()')
      input.skill__name(type='text' placeholder="Новый навык" v-model='newSkill.title')
      div.skill__percent
        input.skill__percent.input(data-type='percent' value="100" v-model='newSkill.percent')
      button.btn-icon
        span.icon-add.addGroup__icon +

    message(
      v-if='responseMessage.check'
      :responseMessage='responseMessage'
      @closeMessage='responseMessage.check=false'
    )
</template>


<script>
  import { mapActions, mapState } from 'vuex';
  import { verificationForm } from '../verification'

  export default {
    components: {
      skill: () => import('./skill'),
      message: () => import('./error')
    },
    props: {
      category: Object
    },
    data() {
      return {
        responseMessage: {
          check: false,
          type: '',
          text: ''
        },
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
          const form = verificationForm(event.target);
          if (!form) {
            return;
          }

          await this.editCategory([this.category.id, this.title]);
          this.editHeader = false;

        } catch (error) {
          this.responseMessage.check=true;
          this.responseMessage.type='error';
          this.responseMessage.text = error.response.data.error || error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
        }
      },

      async deleteThisCategory() {
        try {
          await this.deleteCategory(this.category.id);
        } catch (error) {
          this.responseMessage.check=true;
          this.responseMessage.type='error';
          this.responseMessage.text = error.response.data.error || error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
        }
      },

      async addNewSkill() {
        try {
          const form = verificationForm(event.target);
          if (!form) {
            return;
          }
          await this.addSkill(this.newSkill);
          this.newSkill.title = '';
          this.newSkill.percent = '100';

        //TODO Как правильней вынести повторяющийся компонент?
        } catch (error) {
          this.responseMessage.check=true;
          this.responseMessage.type='error';
          this.responseMessage.text = error.response.data.error || error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
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
      min-width: 0;
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
