const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createIngredientsList = elements => {
  const list = document.querySelector('#ingredients');

  const items = elements.map(element => {
    const liEl = document.createElement('li');
    liEl.textContent = element;
    liEl.classList.add('item');
    return liEl;
  });

  return list.append(...items);
};

createIngredientsList(ingredients);
