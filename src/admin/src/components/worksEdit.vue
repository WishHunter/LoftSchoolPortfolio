<template lang='pug'>
  form(method='post' action='').work-block
    .header
      p.title Редактирование работы
    .body
      label.img-block
        input.img-loading(type='file')
        .img-content
          .img-preload
            p.img-load-text Перетащите или загрузите для загрузки изображения
            button.btn-main(type="button")
              span.btn-main__text Загрузить
      .information
        label.label
          span.input-name Название
          input.input(value='Дизайн сайта для авто салона Porsche')
        label.label
          span.input-name Ссылка
          input.input(value='https://www.porsche-pulkovo.ru')
        label.label
          span.input-name Описание
          textarea.textarea(rows='4') Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
        label.label
          span.input-name Добавление тега
          input.input(value='Jquery, Vue.js, HTML5')
        .tegs
          .teg
            span.teg-name Jquery
            button.btn-icon.teg-delete(type='button')
              svg.icon-remove(preserveAspectRatio="none")
                use(xlink:href='sprite.svg#remove')
          .teg
            span.teg-name Vue.js
            button.btn-icon.teg-delete(type='button')
              svg.icon-remove(preserveAspectRatio="none")
                use(xlink:href='sprite.svg#remove')
          .teg
            span.teg-name HTML5
            button.btn-icon.teg-delete(type='button')
              svg.icon-remove(preserveAspectRatio="none")
                use(xlink:href='sprite.svg#remove')
    .footer
      button.btn-cancel(type='button') Отмена
      button.btn-main
        span.btn-main__text Сохранить
</template>

<style lang="postcss" scoped>
  .work-block {
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
  .body {
    display: flex;
    align-items: flex-start;
    padding: 30px 0;
  }
  .img-block {
    position: relative;
    cursor: pointer;
    min-width: 50%;
    max-width: 50%;
    flex-basis: 50%;
    margin-right: 30px;
  }
  .img-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  .img-preload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed #a1a1a1;
    background-color: rgb(222, 228, 237);
    width: 100%;
    height: 275px;
  }
  .img-load-text {
    line-height: 2;
    opacity: .5;
    text-align: center;
    max-width: 220px;
    margin-bottom: 24px;
  }
  .information {
    max-width: 50%;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
  }
  .label {
    width: 100%;
    margin-bottom: 30px;
  }
  .input-name {
    font-weight: 600;
    opacity: .5;
  }
  .input {
    display: block;
    width: 100%;
    padding: 16px 0;
  }
  .textarea {
    display: block;
    width: 100%;
    padding: 16px;
    margin-top: 16px;
  }
  .tegs {
    display: flex;
    margin: 0 -5px;
  }
  .teg {
    display: flex;
    align-items: center;
    background-color: rgb(244, 244, 244);
    border-radius: 16px;
    padding: 10px 10px 10px 20px;
    margin: 0 5px;
  }
  .teg-name {
    font-size: 13px;
    line-height: 1;
    margin-right: 9px;
  }
  .teg-delete {
    line-height: 1;
    width: 11px;
    height: 11px;
  }
  .icon-remove {
    width: 11px;
    height: 11px;
    display: block;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    margin-left: auto;
  }
  .btn-cancel {
    padding: 0;
    background: none;
    border: none;
    color: #383bcf;
    margin-right: 60px;
    font-weight: 600;
    cursor: pointer;
  }
</style>
