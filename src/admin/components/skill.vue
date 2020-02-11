<template lang="pug">
  .skill
    form.skill__content(
      @submit.prevent='editThisSkill()'
      v-if="edit"
    )
      input.skill__name(
        type="text"
        name="name"
        :value="thisSkill.title"
      )
      input.skill__percent(
        type="text"
        name="percent"
        :value="thisSkill.percent"
      )
      button.btn-icon.skill__btn
        svg.icon-tick(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#tick')
      button.btn-icon.skill__btn(type='button' @click="edit=false")
        svg.icon-remove(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#remove')
    .skill__content(
      v-else
    )
      p.skill__name {{ thisSkill.title }}
      p.skill__percent {{ thisSkill.percent }}
      button.btn-icon.skill__btn(type='button' @click="edit=true")
        svg.icon-edit(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#pencil')
      button.btn-icon.skill__btn(type='button' @click="deleteThisSkill()")
        svg.icon-trash(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#trash')
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    skill: Object
  },
  data() {
    return {
      edit: false,
      thisSkill: {
        title: '',
        percent: 100
      }
    }
  },
  created() {
    this.thisSkill.title = this.skill.title;
    this.thisSkill.percent = this.skill.percent;
  },
  methods: {
    ...mapActions('categories', ['deleteSkill', 'editSkill']),

    async deleteThisSkill() {
      try {
        await this.deleteSkill(this.skill.id)
      } catch (error) {

      }
    },

    async editThisSkill() {
      try {
        const skill = {
          id: this.skill.id,
          newSkill: {
            title: event.target.elements.name.value,
            percent: +event.target.elements.percent.value,
            category: this.skill.category
          }
        };
        await this.editSkill(skill);
        this.thisSkill.title = skill.newSkill.title;
        this.thisSkill.percent = skill.newSkill.percent;
        this.edit=false;
      } catch (error) {

      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  .skill {
    &__content {
      padding: 8px 0;
      display: flex;
      align-items: center;
      width: 100%;
    }
    &__name {
      padding: 5px;
      flex-grow: 1;
    }

    &__percent {
      position: relative;
      min-width: 65px;
      max-width: 65px;
      margin: 0 20px;
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
    &__btn {
    margin-left: 20px;
    @media (max-width:1199px) {
      margin-left: 10px;
    }
  }
  }

  .btn-icon {
    opacity: .5;
    transition: opacity .3s ease-out;
    &:hover, &:focus {
      opacity: 1;
    }
  }
</style>
