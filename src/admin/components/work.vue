<template lang="pug">
  .work
    .header
      img.preview_photo(:src='`https://webdev-api.loftschool.com/${work.photo}`')
      .tegs
        p.teg(
          v-for='teg in tegs'
          :key='teg.id'
        ) {{ teg.name }}

    .body
      p.title {{ work.title }}
      p.desc {{ work.description }}
      a.link(:href='work.link') {{ work.link }}
    .footer
      button.btn-icon.work__btn(type='button' @click='editThisWork')
        span.btn-text Править
        svg.icon-edit(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#pencil')
      button.btn-icon.work__btn(type='button' @click='deleteThisWork')
        span.btn-text Удалить
        svg.icon-remove(preserveAspectRatio="none")
          use(xlink:href='sprite.svg#remove')
</template>


<script>
import {mapActions, mapMutations} from 'vuex';

export default {
  props: {
    work: Object
  },
  data() {
    return {
      tegs: []
    }
  },
  created() {
    this.addTegs();
  },
  watch: {
    work: function() {
      this.addTegs();
    }
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    ...mapMutations('works', ['CHANGE_WORK']),

    async deleteThisWork() {
      try {
        await this.deleteWork(this.work.id);
      } catch (error) {

      }
    },
    editThisWork() {
      this.CHANGE_WORK(this.work);
      this.$emit('editWork');
    },

    addTegs() {
      this.tegs.length=0;
      let arrayTegs = this.work.techs.split(',');
      arrayTegs.forEach((value, index) => {
        if (value && value !== ' ') {
          this.tegs.push({
            id: index,
            name: value
          })
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
  .work {
    background-color: #ffffff;
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  }
  .header {
    position: relative;
  }
  .preview_photo {
    max-width: 100%;
  }
  .tegs {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: rgba(#283340, .7)
  }
  .teg {
    display: inline-block;
    margin: 5px;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 10px 16px;
    font-size: 13px;
    line-height: 1;
    font-weight: 600;
  }
  .body {
    padding: 40px 30px 45px;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 24px;
  }
  .desc {
    font-weight: 600;
    margin-bottom: 24px;
    color: rgba(#283340, .7)
  }
  .link {
    position: relative;
    color: #383bcf;
    font-weight: 600;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 1px;
      background-color: #383bcf;
      transition: width .2s ease-out;
    }
    &:hover:after {
      width: 100%;
    }
  }
  .footer {
    padding: 0 30px 40px;
    display: flex;
    justify-content: space-between;
  }
  .work__btn {
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
