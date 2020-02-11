<template lang="pug">
  nav.navigation
    .container
      ul.list
        li.item
          router-link(
            to='/'
            exact-active-class="active"
          ).link Обо мне
        li.item
          router-link(
            to='/works'
            exact-active-class="active"
          ).link Работы
        li.item
          router-link(
            to='/reviews'
            exact-active-class="active"
          ).link Отзывы
</template>


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


  @media (max-width: 767px) {
    padding: 30px 20px;
  }
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
    text-decoration: none;
    &:after {
      width: 100%;
    transition: width .2s ease-out;
    }
  }
}
</style>
