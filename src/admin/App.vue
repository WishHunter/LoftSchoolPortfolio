<template lang="pug">
  .content
    Login
    Header(
      :name='userName'
      :photo='userPhoto'
    )
    Navigation
    main.main
      AboutMe
      Works
      Reviews
</template>

<script>
  import Login from './src/components/login'
  import Header from './src/components/header'
  import Navigation from './src/components/navigation'
  import AboutMe from './src/components/aboutMe'
  import Works from './src/components/works'
  import Reviews from './src/components/reviews'

export default {
  data() {
    return {
      userName: 'Мольков Денис',
      userPhoto: 'user.jpg'
    }
  },
  components: {
    Login,
    Header,
    Navigation,
    AboutMe,
    Works,
    Reviews
  },
  methods: {
    requiredImgElem(userPhoto) {
			return require(`../images/content/${userPhoto}`);
		}
  },
  created() {
    this.userPhoto = this.requiredImgElem(this.userPhoto);
  }
}
</script>

<style lang="postcss">
  @import "normalize.css";

  * {
    box-sizing: border-box;
  }

  html {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .container {
    max-width: 1120px;
    padding: 0 20px;
    margin: 0 auto;

    @media (max-width:1199px) {
      max-width: 740px;
      padding: 0 15px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      padding: 0 10px;
    }
  }
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    background-image: url('./src/assets/img/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #414c63;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  input {
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid #000;
    background: none;
    width: 100%;
    font-weight: 600;
    &:focus {
      outline: none;
      border-color: #383bcf;
    }
  }
  textarea {
    resize: none;
  }
  .main {
    background-color: rgba(#fff, .9);
  }
  .section {
    padding: 60px 0;
    @media (max-width: 767px) {
      padding: 30px 0;
    }
  }
  .section-title {
    font-size: 21px;
    color: #414c63;
    font-weight: bold;
  }
  .icon-add {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
    color: #fff;
    line-height: 1;
  }
  .section-content {
    margin-top: 30px;
  }
  .btn-icon {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  .icon-edit {
    width: 16px;
    height: 15px;
  }
  .icon-trash {
    width: 13px;
    height: 15px;
  }
  .icon-tick {
    width: 15px;
    height: 12px;
  }
  .icon-remove {
    width: 14px;
    height: 12px;
  }
  .btn-main {
    position: relative;
    background-image: linear-gradient( 90deg, rgb(63,53,203) 0%, rgb(32,80,220) 48%, rgb(0,106,237) 100%);
    color: #fff;
    line-height: 1;
    font-weight: bold;
    text-transform: uppercase;
    padding: 20px 40px;
    border: none;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
      transition: opacity .3s ease-out;
    }
    &__text {
      position: relative;
      z-index: 1;
      line-height: 1;
    }
    &:hover, &:focus {
      outline: none;
      &:before {
        opacity: 0;
      }
    }
  }
</style>
