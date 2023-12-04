const input = document.querySelector("#validation-input");

input.addEventListener("blur", borderAttention);

function borderAttention(event) {
  const validateNumb = Number(input.getAttribute("data-length"));
  if (
    event.target.value.length > validateNumb ||
    (event.target.value.length >= 1 && event.target.value.length < validateNumb)
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (event.target.value.length === validateNumb) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else input.classList.remove("invalid", "valid");
}
