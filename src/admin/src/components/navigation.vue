<template lang="pug">
  nav.navigation
    .container
      ul.list
        li.item
          a.link.active(href='#') Обо мне
        li.item
          a.link(href='#') Работы
        li.item
          a.link(href='#') Отзывы
</template>

<script>
export default {
  props: {

  }
}
</script>

<style lang="postcss" scoped>
.navigation {
  background-color: #fff;
}
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.link {
  position: relative;
  display: block;
  padding: 30px;
  color: #414c63;
  transition: color .2s ease-out;
  &:after {
    content: '';
    position: absolute;
    top: calc(100% - 3px);
    left: 0;
    width: 0;
    height: 3px;
    background-color: #383bcf;
    transition: width .2s ease-out;
  }
  &:hover, &.active {
    color: #383bcf;
    &:after {
      width: 100%;
    transition: width .2s ease-out;
    }
  }
}
</style>
