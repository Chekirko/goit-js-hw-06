function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

function onInputChange(event) {
  return event.currentTarget.value;
}

const startSize = 30;
const amount = refs.input.addEventListener('input', onInputChange);

function createBoxes(amount) {}

refs.createBtn.addEventListener('click', createBoxes);
