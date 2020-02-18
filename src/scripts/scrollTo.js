export default function () {
  const scrollLinks = document.querySelectorAll('.js-scrollTo');

  Array.from(scrollLinks).forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollTo(link);
    })
  });

  function scrollTo(link) {
    if (document.querySelector('.header__nav').classList.contains('active')) {
      document.querySelector('.js-toogle-menu').classList.remove('active');
      document.querySelector('.header__nav').classList.remove('active');
    }
    const scrollElem = link.getAttribute('href');
    document.querySelector(scrollElem).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}
