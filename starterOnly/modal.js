function editNav() {
  let myTopNav = document.querySelector("#myTopnav");
  if (myTopNav.className === "topnav") {
    // myTopNav.className += " responsive";
    myTopNav.classList.add('responsive');
    // myTopNav.setAttribute("class", "topnav responsive");
  } else {
    // myTopNav.className = "topnav";
    myTopNav.classList.remove('responsive');
    // myTopNav.setAttribute("class", "topnav");

  }
}

// DOM loading
// window.addEventListener("load", function () {

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCloseBtn = document.querySelector(".close");
  const modalConfirm = document.querySelector(".bground-confirm");
  const closeConfirm = document.querySelector(".close-confirm");
  const closeConfirmButton = document.querySelector(".close-confirm-button");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // Close modal event
  modalCloseBtn.addEventListener("click", closeModal);


  // Close Confirm event
  closeConfirm.addEventListener("click", closeModalConfirm);
  closeConfirmButton.addEventListener("click", closeModalConfirm);

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }

  // launch modal confirm message
  function launchModalConfirm() {
    modalConfirm.style.display = "block";
  }

  // close modal confirm message
  function closeModalConfirm() {
    modalConfirm.style.display = "none";
  }

  //****************************//
  //***** form validation *****//
  //**************************//

  //DOM elements
  let form = document.querySelector("#reserve-form");
  let firstName = document.querySelector("#first");
  let lastName = document.querySelector("#last");
  let email = document.querySelector("#email");
  let birthdate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let usingConditions = document.querySelector("#checkbox1");
  let radioButtons = document.querySelectorAll(".radio-input");
  let submit = document.querySelector(".btn-submit");

  //DOM invalid inputs
  let firstNameData = document.querySelector(".firstname");
  let lastNameData = document.querySelector(".lastname");
  let emailData = document.querySelector(".email");
  let birthdateData = document.querySelector(".birthdate");
  let quantityData = document.querySelector(".quantity");
  let locationsData = document.querySelector(".radio-buttons");
  let conditionsData = document.querySelector(".checkboxes");

  let formInputs = {
    "firstName": false,
    "lastName": false,
    "email": false,
    "birthdate": false,
    "quantity": false,
    "radioButtons": false,
    "usingConditions": false
  }

  // Error messages
  let firstNameError = this.document.querySelector(".first-name-error");
  let lastNameError = this.document.querySelector(".last-name-error");
  let emailError = this.document.querySelector(".email-error");
  let birthdateError = this.document.querySelector(".birthdate-error");
  let quantityError = this.document.querySelector(".quantity-error");
  let locationError = this.document.querySelector(".location-error");
  let usingConditionsError = this.document.querySelector(".using-conditions-error");

  // Regexp
  let datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Fonction qui vérifie la longueur de la valeur de input
  function minLengthValidator(errorElement, minLengthNumber, inputValue, name) {
    if (inputValue && inputValue.length >= minLengthNumber) {
      errorElement.style.display = "none";

      formInputs[name] = true;
    } else {
      errorElement.style.display = "block";
      formInputs[name] = false;
    }
  }
  
  // Fonction qui vérifie la conformité de l'adresse email
  function emailValidator(input, errorElement) {
    if (input.match(emailPattern)) {
      formInputs.email = true;
      emailData.setAttribute("data-error-visible", false);
    } else {
      emailData.setAttribute("data-error-visible", true);
      formInputs.email = false;
    }
  }

  // Fonction qui vérifie la conformité de la date de naissance
  function dateValidator(input, errorElement) {
    if (input.match(datePattern)) {
      formInputs.birthdate = true;
      birthdateData.setAttribute("data-error-visible", false);
    } else {
      birthdateData.setAttribute("data-error-visible", true);
      formInputs.birthdate = false;
    }
  }

  // Fonction qui vérifie si un bouton radio est checked
  function radioValidator(input, errorElement) {
    let count = false;
    for (let radio of input){
      if (radio.checked){
        locationsData.setAttribute("data-error-visible", false);
        formInputs.radioButtons = true;
        return count = true;
      }
      locationsData.setAttribute("data-error-visible", true);
      formInputs.radioButtons = false;
    }
  }

  // Fonction qui vérifie si un checkbox est checked
  function checkedValidator(input, errorElement) {
    if (input.checked == true) {
      conditionsData.setAttribute("data-error-visible", false);
      formInputs.usingConditions = true;
    } else { 
      conditionsData.setAttribute("data-error-visible", true);
      formInputs.usingConditions = false;
    }
  }

  //****************************//
  //*****      Event      *****//
  //**************************//
  

  //On appelle la fonction de validation à l'interaction avec input firstname
  firstName.addEventListener("input", function () {
    minLengthValidator(firstNameError, 2, this.value, "firstName");
  });

  //On appelle la fonction de validation à l'interaction avec input lastname
  lastName.addEventListener("input", function () {
    minLengthValidator(lastNameError, 2, this.value, "lastName");
  });

  //On appelle la fonction de validation à l'interaction avec input email
  email.addEventListener("input", function () {
    emailValidator(this.value, emailError);
  });

  //On appelle la fonction de validation à l'interaction avec input email
  birthdate.addEventListener("input", function () {
    dateValidator(this.value, birthdateError);
  });

  //On appelle la fonction de validation à l'interaction avec input quantity
  quantity.addEventListener("input", function () {
    minLengthValidator(quantityError, 1, this.value, "quantity");
  });

  //On appelle la fonction de validation à l'interaction avec click input radio
  for (let radio of radioButtons){
    radio.addEventListener("click", function() {
      radioValidator(radioButtons, locationError);
    });
  }
  
  //On appelle la fonction de validation à l'interaction avec input unsingConditions
  usingConditions.addEventListener("input", function () {
    checkedValidator(this, usingConditionsError);
  });


  //On appelle toutes les validations à l'interaction avec input submit
  submit.addEventListener("click", function () {
    minLengthValidator(firstNameError, 2, firstName.value);
    minLengthValidator(lastNameError, 2, lastName.value);
    emailValidator(email.value, emailError);
    dateValidator(birthdate.value, birthdateError);
    minLengthValidator(quantityError, 1, quantity.value);
    radioValidator(radioButtons, locationError);
    checkedValidator(usingConditions, usingConditionsError);

    let isFormValid = true;
    for (const property in formInputs) {
      if (formInputs[property] === false) {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      launchModalConfirm();
      form.reset();
      closeModal();
    }

  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); //stop form from submitting
  });


// });
