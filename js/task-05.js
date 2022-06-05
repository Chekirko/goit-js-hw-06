const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.span.textContent = 'Anonimous';
  }
}

refs.input.addEventListener('input', onInputChange);
