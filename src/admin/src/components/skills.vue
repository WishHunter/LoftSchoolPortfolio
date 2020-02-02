<template lang="pug">
  .skills-block
    .header
      p.title Front End
      button.btn-icon.skill__btn(type='button')
          svg.icon-edit(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#pencil')
    .body
      .skill
        p.skill__name Html5
        p.skill__percent 100
        button.btn-icon.skill__btn(type='button')
          svg.icon-edit(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#pencil')
        button.btn-icon.skill__btn(type='button')
          svg.icon-trash(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#trash')

      .skill
        input.skill__name(value="CSS")
        div.skill__percent
          input.skill__percent.input(value="65")
        button.btn-icon.skill__btn(type='button')
          svg.icon-tick(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#tick')
        button.btn-icon.skill__btn(type='button')
          svg.icon-remove(preserveAspectRatio="none")
            use(xlink:href='sprite.svg#remove')
    .footer
      input.skill__name(placeholder="Новый навык")
      div.skill__percent
        input.skill__percent.input(value="100")
      button.btn-icon(type="button")
        span.icon-add.addGroup__icon +
</template>


<script>
export default {
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
  }
  .skill {
    padding: 8px 0;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .skill__name {
    padding: 5px;
    flex-grow: 1;
  }
  .skill__percent {
    position: relative;
    min-width: 65px;
    max-width: 65px;
    margin: 0 20px;
    padding: 5px 30px 5px 5px;
    &:after {
      content: '%';
      position: absolute;
      opacity: .7;
      right: 10px;
      bottom: 5px;
    }
  }
  div.skill__percent {
    padding: 0;
  }
  input.skill__percent {
    margin: 0;
  }
  .skill__btn {
    margin-left: 20px;
    @media (max-width:1199px) {
      margin-left: 10px;
    }
  }
  .btn-icon {
    opacity: .5;
    transition: opacity .3s ease-out;

    &:hover, &:focus {
      opacity: 1;
    }
  }
  .footer {
    margin-top: 15px;
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
</style>
