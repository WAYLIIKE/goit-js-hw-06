const nameOut = document.querySelector("#name-output");
const nameIn = document.querySelector("#name-input");

nameIn.addEventListener("input", updateName);

function updateName(event) {
  if (event.currentTarget.value != "") {
    return (nameOut.textContent = event.currentTarget.value);
  }
  return (nameOut.textContent = "Anonymous");
}
