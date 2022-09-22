// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorQuantity = document.getElementById("errorQuantity");
const btnRadio = document.querySelectorAll("input[type='radio']:checked");
const form = document.querySelector("form");
const checkbox1 = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("submit-button");

//REGEX
const regExpNames = /^[a-zA-Z]{2,}$/;
const regExpEmail = /^[\w-_\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpQuantity = /^[0-9]{0,99}$/;
const regExpBirthdate = /^[a-zA-Z]{2,}$/;

//LISTENERS
firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthdate.addEventListener("change", checkBirthdate);
quantity.addEventListener("change", checkQuantity);
form.addEventListener("submit", isRadioValid);
// checkbox1.addEventListener("click", checkbox1True);
form.addEventListener("submit", (e) => {
  if (checkbox1.checked == false) {
    alert("Veuillez accepter les conditions d'utilisation.");
    e.preventDefault();
  }
  alert("Merci ! Votre réservation a été reçue.");
});

//FORM FIELDS VALIDATION
//First Name
function checkFirstName() {
  if (!firstName.value.match(regExpNames) || first.value.trim() === "") {
    firstName.style.border = "2px solid #FF4E60";
    errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus";
    return false;
  }

  firstName.style.border = "2px solid #00FF00";
  return true;
}
//Last name
function checkLastName() {
  if (!lastName.value.match(regExpNames) || last.value.trim() === "") {
    lastName.style.border = "2px solid #FF4E60";
    errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus";
    return false;
  }

  lastName.style.border = "2px solid #00FF00";
  return true;
}
//Email
function checkEmail() {
  if (!email.value.match(regExpEmail) || email.value.trim() === "") {
    email.style.border = "2px solid #FF4E60";
    errorEmail.innerHTML = "Veuillez entrer une adresse email valide";
    return false;
  }

  email.style.border = "2px solid #00FF00";
  return true;
}

//Quantity
function checkQuantity() {
  if (!quantity.value.match(regExpQuantity) || quantity.value.trim() === "") {
    quantity.style.border = "2px solid #FF4E60";
    errorQuantity.innerHTML =
      "Veuillez choisir une quantité valide (entre 0 et 100)";
    return false;
  }
  quantity.style.border = "2px solid #00FF00";
  return true;
}

//Birthdate
function checkBirthdate() {
  if (!birthdate.value.match(regExpBirthdate)) {
    birthdate.style.border = "2px solid #FF4E60";
  }
  birthdate.style.border = "2px solid #00FF00";
}

//Radio
function isRadioValid() {
  if (!btnRadio) {
    console.log("pas ok");
    return false;
  }
  console.log("ok");
  return true;
}
