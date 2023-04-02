//Get all the elements from the sign up form
signUpForm = document.getElementById("form");
//get the username input
signUpUserName = document.getElementById("username");
//get the password input
signUpPassword = document.getElementById("password");
//get the button element
signUpButton = document.getElementById("submitBTN");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (localStorage.getItem(signUpUserName.value)) {
    alert("You already logged in");
    window.location.replace("index.html");
  } else {
    localStorage.setItem(`${signUpUserName.value}`, `${signUpPassword.value}`);
    window.location.replace("index.html");
  }
});
