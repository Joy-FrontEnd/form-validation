let form = document.getElementById('form')
let userName = document.getElementById('user-name')
let email = document.getElementById('email')
let password = document.getElementById('my-password1')
let confirmPassword = document.getElementById('my-password2')
let errorElement = document.getElementById('error')


function accountCreated() {
  //user name
  if (userName.value.trim() === "") {
    onError(userName, "Username cannot be empty");


  } else {
    onSuccess(userName);
  }

  //email
  if (email.value.trim() === "") {
    onError(email, "Email address can not be empty")


  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(email, "Email is not valid")


    } else {
      onSuccess(email);

    }
  }
  //password

  if (password.value.trim() === "") {
    onError(password, "Password can not be empty");


  } else {
    onSuccess(password);
  }

  //confirm password

  if (password.value.trim() != confirmPassword.value.trim()) {
    alert("Passwords did not match");
  }

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  accountCreated();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let messageElement = parent.querySelector("small");
  messageElement.style.visibility = "hidden";
  messageElement.innerText = " ";
  window.location.href = "about.html";
}

function onError(input) {
  let parent = input.parentElement;
  let messageElement = parent.querySelector("small");
  messageElement.style.visibility = "visible";
  messageElement.innerText = message;
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