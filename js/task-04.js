let counterValue = 0;

const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);

const counter = document.querySelector("#value");

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counter.textContent = counterValue;
}
