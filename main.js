let form = document.getElementById('form')
let userName = document.getElementById('user-name')
let email = document.getElementById('email')
let password = document.getElementById('my-password1')
let confirmPassword = document.getElementById('my-password2')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  accountCreated();
});


function accountCreated() {

  //user name
  let userNameValue = userName.value.trim();
  if (userNameValue === "") {
    onError(userName, "Please enter your Username")
  } else {
    onSuccess(userName)
  }
  //email

  let emailValue = email.value.trim();
  if (emailValue === "") {
    onError(email, "Please enter your email");
  } else if (!isValidEmail(emailValue)) {
    onError(email, 'Email is invalid');

  } else {
    onSuccess(email)
  }
  //password

  let passwordValue = password.value.trim();
  if (passwordValue === "") {
    onError(password, "Please enter your password")
  } else {
    onSuccess(password)
  }

  //confirm password

  let confirmPasswordValue = confirmPassword.value.trim();
  if (confirmPasswordValue === "") {
    onError(confirmPassword, "Please confirm your password")
  } else if (passwordValue != confirmPasswordValue) {
    onError(confirmPassword, "Password does not match");
  } else {
    onSuccess(confirmPassword)
  }
}

function onError(input, message) {
  let formControl = input.parentElement
  let small = formControl.querySelector("small")
  small.innerText = message;
  formControl.className = 'form-control error'

}

function onSuccess(input) {
  let formControl = input.parentElement
  formControl.className = 'form-control success'

}



function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}



function showPassword() {
  var x = document.getElementById("my-password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}