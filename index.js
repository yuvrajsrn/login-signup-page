const body = document.querySelector("body");
const logInButton = document.querySelector(".logIn");
const signUpButton = document.querySelector(".signUp");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/feed/feed.html";
  }
});

logInButton.addEventListener("click", () => {
  location.href = "log-in/login.html";
});

signUpButton.addEventListener("click", () => {
  location.href = "sign-up/signup.html";
});
