function verificationForm(form) {

  let verification = true;
  const FormInput = form.querySelectorAll('input, textarea');
  Array.from(FormInput).forEach(elem => {
    elem.addEventListener('focus', () => {
      if (elem.classList.contains('error')) {
        elem.classList.remove('error');
      }
    }, { once: true });

    if (elem.type === 'file') {
      if (!elem.files[0]) {
        elem.classList.add('error');
        verification = false;
        return;
      }
    }

    if (!elem.value) {
      elem.classList.add('error');
      verification = false;
      return;
    }

    if (elem.dataset.type === 'percent') {
      if (
        !isFinite(+elem.value) ||
        +elem.value < 0 ||
        +elem.value > 100
      ) {
        elem.classList.add('error');
        elem.value = '';
        verification = false;
        return;
      }
    }




  })
  return verification;

}

export { verificationForm };
