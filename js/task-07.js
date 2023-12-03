const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", changeSize);

function changeSize(event) {
  console.log(event.target.value);
  text.style.fontSize = event.target.value + "px";
}
