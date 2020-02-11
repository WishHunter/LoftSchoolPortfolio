<template lang="pug">
  .login__bg
    form.login(@submit.prevent="login")
      h1.login__title Авторизация
      label.login__label
        input.login__input(name="name" type="text" @change="inputDesc" v-model="user.name")
        span.login__desc Логин
        svg.login__icon(width="26" height="30")
          use(xlink:href='sprite.svg#user')
      label.login__label
        input.login__input(name="password" type="password" @change="inputDesc" v-model="user.password")
        span.login__desc Пароль
        svg.login__icon(width="27" height="28")
          use(xlink:href='sprite.svg#key')
      button.login__btn
        span.login__btn-text Отправить
</template>

<script>
import $axios from '../../requests';

export default {
  data() {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {

    inputDesc(elem) {
      if (elem.target.value !== '') {
        elem.target.classList.add('has-value');
        return;
      }
      elem.target.classList.remove('has-value');
    },

    async login() {
      try {

        const responce = await $axios.post('/login', this.user);
        const token = responce.data.token;

        localStorage.setItem('token', token);
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`

        this.$router.replace('/');

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  .login {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 60px 80px;
    background-color: #fff;
    transform: translate(-50%, -50%);

    &__bg {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background-image: url('../../../images/content/autumn-bg.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 20;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(#2d3c4e, .95);
      }
    }

    &__title {
      text-align: center;
      font-size: 36px;
      color: #414c63;
      margin-bottom: 70px;
      font-weight: 600;
    }
    &__label {
      position: relative;
      display: block;
      width: 100%;
      margin: 0 0 40px;
    }

    &__input {
      position: relative;
      z-index: 2;
      padding: 20px 20px 20px 46px;
      width: 100%;
      border: none;
      border-bottom: 1px solid #414c63;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center left;
      font-size: 18px;
      color: #414c63;
      font-weight: bold;
      transition: background .2s;

      &:hover, &:focus {
        outline: none;
        border-color: $main-color;

        & + .login__desc + .login__icon {
          fill: $main-color;
        }
      }

      &--name {
        background-image: svg-load('user.svg', fill=rgba(#414c63, .3), width=26px, height=30px);
        &:hover, &:focus {
          background-image: svg-load('user.svg', fill=$main-color, width=26px, height=30px);
        }
        &.input--error{
          background-image: svg-load('user.svg', fill=#fb0000, width=26px, height=30px);
        }
      }

      &:focus + .login__desc, &.has-value + .login__desc {
        bottom: 100%;
      }
    }

    &__desc {
      position: absolute;
      bottom: calc(50% - 8px);
      left: 46px;
      line-height: 1;
      opacity: 0.3;
      z-index: 1;
      transition: bottom .2s;
    }

    &__icon {
      position: absolute;
      left: 5px;
      bottom: 50%;
      transform: translateY(50%);
      line-height: 1;
      fill: #414c63;
      opacity: .3;
      transition: fill .2s;
    }

    &__btn {
      position: relative;
      background-image: linear-gradient( 90deg, rgb(255,127,0) 0%, rgb(255,142,0) 48%, rgb(255,157,0) 100%);
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1;
      padding: 34px 120px;
      border: none;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-image: linear-gradient( 90deg, rgb(208,115,27) 0%, rgb(214,131,31) 48%, rgb(220,147,34) 100%);
        transition: opacity .2s;
      }

      &-text {
        position: relative;
        z-index: 1;
      }

      &:hover, &:focus {
        &:before {
          opacity: 0;
        }
      }
    }
  }
</style>
