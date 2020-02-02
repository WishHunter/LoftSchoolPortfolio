!(function () {

  const form = document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    let message = checkElemsForm(e.target);
    if (!message[0]) {
      let formOpen = new Popup(message[1], message[0]);
      return;
    };
    submitAJAX(e.target.elements);
  });
})();

class Popup {
  constructor(message, mod=true) {
    this.formMessage = document.createElement('div');
    this.formMessage.className = 'formMessage';
    this.content = document.createElement('div');
    this.content.className = 'formMessage__content';
    this.text = document.createElement('p');
    this.text.className = 'formMessage__text';
    this.text.innerHTML = message;
    this.close = document.createElement('button');
    this.close.className = 'formMessage__close';
    this.close.innerHTML = '<svg preserveAspectRatio="none" class="formMessage__close-icon"><use xlink: href = "sprite.svg#remove" ></use></svg >'
    this.content.append(this.text);
    this.content.append(this.close);
    this.formMessage.append(this.content);

    if (!mod) {
      this.formMessage.classList.add('error');
    }

    this.openPopup();
    this.close.addEventListener('click', () => {
      this.closePopup();
    });
  }
  openPopup() {
    document.body.append(this.formMessage);
  }
  closePopup() {
    this.formMessage.remove();
  }
}

function checkElemsForm(form) {
  const elems = form.elements;
  let message = [true, 'сообщение отправленно'];
  Array.from(elems).forEach(elem => {
    if (elem.value === '' && elem.type !== 'submit') {
      elem.classList.add('input--error');
      message = [false, 'Не все поля заполнены']
      return message;
    }
    return message;
  })
  return message;
};

async function submitAJAX(form) {
  let formData = JSON.stringify(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./script.json");
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(formData);

  xhr.onload = () => console.log(xhr.response);
  xhr.onerror = () => console.log(xhr.response);
};
