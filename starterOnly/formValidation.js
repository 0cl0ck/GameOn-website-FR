// DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorQuantity = document.getElementById("errorQuantity");
const errorRadio = document.getElementById("errorRadio");
const form = document.querySelector("form");
const checkbox1 = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("submit-button");

//REGEX
const regExpNames = /^[a-zA-Z]{2,}$/;
const regExpEmail = /^[\w-_\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpQuantity = /^[0-9]{0,99}$/;

//LISTENERS
firstName.addEventListener("change", () => checkFirstName(firstName));
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthdate.addEventListener("change", checkBirthdate);
quantity.addEventListener("change", checkQuantity);
//form.addEventListener("submit", isRadioValid);
// checkbox1.addEventListener("click", checkbox1True);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const btnRadio = document.querySelector("input[name='location']:checked");
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const quantity = document.getElementById("quantity");
  const birthdate = document.getElementById("birthdate");
  const bground = document.querySelector(".bground");
  if (
    !isRadioValid(btnRadio) ||
    !checkFirstName(firstName) ||
    !checkLastName(lastName) ||
    !checkEmail(email) ||
    !checkQuantity(quantity) ||
    !checkBirthdate(birthdate)
  ) {
    return;
  }

  if (checkbox1.checked == false) {
    alert("Veuillez accepter les conditions d'utilisation.");
    return;
  }
  let modal = document.querySelector(".content");
  let closeModal = document.createElement("div");
  modal.remove();
  bground.appendChild(closeModal);
  closeModal.setAttribute("class", "content");
  closeModal.innerHTML =
    " <span class='close'></span> Merci <br/> Votre réservation a bien été reçue. <input class='btn-submit' type='submit' value='Fermer'>";
});

//FORM FIELDS VALIDATION
//First Name
function checkFirstName() {
  if (!firstName.value.match(regExpNames) || first.value.trim() === "") {
    firstName.style.border = "2px solid #FF4E60";
    errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus";
    return false;
  }
  errorFirstName.innerHTML = "";
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
  errorLastName.innerHTML = "";
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
  errorEmail.innerHTML = "";
  email.style.border = "2px solid #00FF00";
  return true;
}

//Quantity
function checkQuantity() {
  if (!quantity.value.match(regExpQuantity) || quantity.value.trim() === "") {
    quantity.style.border = "2px solid #FF4E60";
    errorQuantity.innerHTML =
      "Veuillez choisir une quantité valide (supérieure ou égale à 0)";
    return false;
  }
  errorQuantity.innerHTML = "";
  quantity.style.border = "2px solid #00FF00";
  return true;
}

//Birthdate
function checkBirthdate() {
  const date = new Date(birthdate.value);
  const actualDate = new Date();
  const dateDifference = actualDate.getTime() - date.getTime();
  const yearOfBirth = date.getFullYear();
  const eighteenYearsMs = 567648000000;

  if (date > actualDate || yearOfBirth < 1904) {
    errorBirthdate.innerHTML = "Veuillez choisir une date valide";
    birthdate.style.border = "2px solid #FF4E60";
    return false;
  }

  // 18 ans en millisecondes équivaut à 567648000000

  if (dateDifference < eighteenYearsMs) {
    errorBirthdate.innerHTML =
      "Vous devez être majeur pour participer aux tournois";
    birthdate.style.border = "2px solid #FF4E60";
    return false;
  }
  if (dateDifference > eighteenYearsMs) {
    birthdate.style.border = "2px solid #00FF00";
    errorBirthdate.innerHTML = "";
    return true;
  }
}

//Radio
function isRadioValid(value) {
  if (!value) {
    errorRadio.innerHTML = "Veuillez sélectionner une ville";
    return false;
  }
  errorRadio.innerHTML = "";
  return true;
}
