// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");

//REGEX
const regExpNames = /^[a-zA-Z]{2,}$/;
const regExpEmail = /^[\w-_\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//LISTENERS
firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);

//FORM FIELDS VALIDATION
//First Name
function checkFirstName() {
  if (!firstName.value.match(regExpNames) || first.value.trim() === "") {
    firstName.parentElement.setAttribute("errorMsg", "true");
    firstName.style.border = "2px solid #FF0000";
    errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus";
    return false;
  }
  first.parentElement.setAttribute("errorMsg", "false");
  firstName.style.border = "2px solid #00FF00";
  return true;
}
//Last name
function checkLastName() {
  if (!lastName.value.match(regExpNames) || last.value.trim() === "") {
    lastName.parentElement.setAttribute("errorMsg", "true");
    lastName.style.border = "2px solid #FF0000";
    errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus";
    return false;
  }
  last.parentElement.setAttribute("errorMsg", "false");
  lastName.style.border = "2px solid #00FF00";
  return true;
}
//Email
function checkEmail() {
  if (!email.value.match(regExpEmail) || email.value.trim() === "") {
    email.parentElement.setAttribute("errorMsg", "true");
    email.style.border = "2px solid #FF0000";
    errorEmail.innerHTML = "Veuillez entrer une adresse email valide";
    return false;
  }
  email.parentElement.setAttribute("errorMsg", "false");
  email.style.border = "2px solid #00FF00";
  return true;
}
