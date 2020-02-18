<template lang="pug">
  .message(@click.self='$emit("closeMessage")')
    .popup
      p.text {{ responseMessage.text }}
      button.close(type="button" @click='$emit("closeMessage")')
</template>

<script>
export default {
  props: {
    responseMessage: Object
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="postcss" scoped>
  .message {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(45, 60, 78, .9);
    cursor: pointer;
    z-index: 15;
  }
  .popup {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%);
    background-color: #b13333;
    color: #fff;
    width: 100%;
    max-width: 390px;
    padding: 28px 20px;
    font-size: 18px;
    font-weight: 600;
    cursor: default;
  }

  .close {
    position: relative;
    width: 20px;
    height: 20px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: calc(50% - 2px);
      width: 100%;
      height: 4px;
      background-color: #fff;
      transform-origin: center center;
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }
  }
</style>
