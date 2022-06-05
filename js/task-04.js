let counterValue = 0;

const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

console.log(valueEl, incrementBtn, decrementBtn);

function onIncrementBtnClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function onDecrementBtnClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
