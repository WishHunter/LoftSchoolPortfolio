<template lang="pug">
  section.section.aboutMe
    .container
      .header
        h2.section-title Блок "Обо мне"
        button.addGroup(type="button")
          span.icon-add.addGroup__icon +
          | Добавить группу
      .section-content
        .block
          SkillsBlock
        .block
          SkillsBlock
        .block
          SkillsBlock
</template>

<script>
  import SkillsBlock from './skills'

export default {
  components: {
    SkillsBlock
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    display: flex;
  }
  .addGroup {
    display: flex;
    border: none;
    background: none;
    color: #383bcf;
    cursor: pointer;
    margin-left: 60px;

  }
  .addGroup__icon {
    font-size: 15px;
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  .section-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
</style>
