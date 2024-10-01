var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var btn = document.getElementById("btn");
var toggleButtons = document.querySelectorAll(".toggle-btn");

function signup() {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
  btn.style.left = "110px";  // Move the color slider to the right for "Sign Up"
  setActiveButton(toggleButtons[1]); // Set "Sign Up" button as active
}

function login() {
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
  btn.style.left = "0px";  // Move the color slider back to the left for "Login"
  setActiveButton(toggleButtons[0]); // Set "Login" button as active
}

function setActiveButton(activeButton) {
  toggleButtons.forEach(button => {
    button.classList.remove("active"); // Remove active class from all buttons
  });
  activeButton.classList.add("active"); // Add active class to the clicked button
}
