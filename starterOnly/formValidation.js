// DOM Elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
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

//Validation au Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const btnRadio = document.querySelector("input[name='location']:checked");
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const quantity = document.getElementById("quantity");
  const birthdate = document.getElementById("birthdate");
  const bground = document.querySelector(".bground");
  //On empêche la validation du formulaire si l'une des entrées n'est pas bonne
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
  //On empêche la validation du formulaire si la case des conditions d'utilisation n'est pas cochée
  if (checkbox1.checked == false) {
    alert("Veuillez accepter les conditions d'utilisation.");
    return;
  }

  //Création de la modal de remerciement
  //DOM Elements
  let modal = document.querySelector(".content");
  let modalClose = document.createElement("div");
  let close = document.querySelector(".close");
  let btnClose = document.createElement("button");
  let p = document.createElement("p");
  //On attribue les classes à la modal, on crée également les éléments qui la compose
  p.setAttribute("class", "content  modalp");
  p.innerHTML = "Merci ! </br> Votre réservation a bien été reçue.";
  modalClose.setAttribute("class", "content  modalP");
  btnClose.setAttribute("class", "content");
  btnClose.setAttribute("id", "btn-close");
  btnClose.innerText = "Fermer";
  //On supprime le formulaire
  modal.remove();
  //On fait apparaître la modal de remerciement
  bground.appendChild(modalClose);
  modalClose.appendChild(p);
  modalClose.appendChild(close);
  modalClose.appendChild(btnClose);

  //Close confirmation
  const closeModalBtnVindieu = document.getElementById("btn-close");
  closeModalBtnVindieu.addEventListener("click", closeM);

  function closeM() {
    modal.remove();
    window.location.reload();
  }
});

//FORM FIELDS VALIDATION
//First Name
function checkFirstName() {
  if (!firstName.value.match(regExpNames) || firstName.value.trim() === "") {
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
  if (!lastName.value.match(regExpNames) || lastName.value.trim() === "") {
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
