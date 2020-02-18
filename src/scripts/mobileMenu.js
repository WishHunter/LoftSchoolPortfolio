export default function () {
  document.querySelector('.js-toogle-menu').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
  })
}
