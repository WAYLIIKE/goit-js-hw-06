const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsList = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});

const list = document.querySelector("#ingredients");

list.append(...ingredientsList);
