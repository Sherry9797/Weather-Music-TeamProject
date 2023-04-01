//By Victor-----------------------------------
//Get all the elements from the sign up form
signUpForm = document.getElementById("form");
//get the username input
signUpUserName = document.getElementById("username");
//get the password input
signUpPassword = document.getElementById("password");
//get the button element
signUpButton = document.getElementById("submitBTN");

//Add an event listener to the form
if (localStorage.length === 0) {
  window.location.replace("Signup.html");
}
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem(`${signUpUserName.value}`, `${signUpPassword.value}`);
  window.location.replace("index.html");
});
