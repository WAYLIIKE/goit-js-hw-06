function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const btn = document.querySelector(".change-color");

const colorHex = document.querySelector(".color");

btn.addEventListener("click", handlerbtn);

function handlerbtn() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorHex.textContent = color;
}
