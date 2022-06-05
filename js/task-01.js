const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

for (const categoryEl of categoriesEl) {
  const text = categoryEl.firstElementChild;
  const elements = categoryEl.querySelectorAll('li');
  console.log(`Category: ${text.textContent}`);
  console.log(`Elements: ${elements.length}`);
}
