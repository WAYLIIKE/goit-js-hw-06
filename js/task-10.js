function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#boxes");

const createBtn = document.querySelector("button[data-create]");

const destroyBtn = document.querySelector("button[data-destroy]");

const input = document.querySelector("input");

createBtn.addEventListener("click", function () {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  mainDiv.innerHTML = "";
  for (let i = 0; i < amount * 10; i += 10) {
    let color = getRandomHexColor();
    let div = document.createElement("div");
    div.style.width = 30 + i + "px";
    div.style.height = 30 + i + "px";
    div.style.backgroundColor = color;
    mainDiv.append(div);
  }
}

function destroyBoxes() {
  mainDiv.innerHTML = "";
}
