// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");

//REGEX
const regExpNames = /^[a-zA-Z]{2,}$/;
const regExpEmail = /^[\w-_\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//FORM FIELDS VALIDATION
//First Name
function checkFirstName() {
  if (!firstName.value.match(regExpNames) || first.value.trim() === "") {
    firstName.parentElement.setAttribute("error-msg", "true");
    firstName.style.border = "2px solid #FF0000";
    return false;
  }
  first.parentElement.setAttribute("error-msg", "false");
  firstName.style.border = "2px solid #00FF00";
  return true;
}
function checkLastName() {
  if (!lastName.value.match(regExpNames) || last.value.trim() === "") {
    lastName.parentElement.setAttribute("error-msg", "true");
    lastName.style.border = "2px solid #FF0000";
    return false;
  }
  last.parentElement.setAttribute("error-msg", "false");
  lastName.style.border = "2px solid #00FF00";
  return true;
}

function checkEmail() {
  if (!email.value.match(regtest) || email.value.trim() === "") {
    email.parentElement.setAttribute("error-msg", "true");
    email.style.border = "2px solid #FF0000";
    return false;
  }
  email.parentElement.setAttribute("error-msg", "false");
  email.style.border = "2px solid #00FF00";
  return true;
}

//LISTENERS
firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
