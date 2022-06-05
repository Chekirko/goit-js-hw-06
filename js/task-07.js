const inputEl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');

function onInputChange(event) {
  const value = event.currentTarget.value;
  textEl.style.fontSize = `${value}px`;
}

inputEl.addEventListener('input', onInputChange);
