const form = document.querySelector(".login-form");

form.addEventListener("submit", formHundle);

function formHundle(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  let obj = {};
  if (email.value === "" || password.value === "") {
    alert("Enter email and password!");
  } else console.log((obj = { email: email.value, password: password.value }));
  event.target.reset();
}
