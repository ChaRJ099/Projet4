// DOM loading
window.addEventListener("load", function () {
  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCloseBtn = document.querySelector(".close");
  const modalConfirm = document.querySelector(".bground-confirm");
  const modalCloseConfirmBtn = document.querySelector(".close-confirm-button");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // Close modal event
  modalCloseBtn.addEventListener("click", closeModal);
  modalCloseConfirmBtn.addEventListener("click", closeModalConfirm);

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

  let formData = [
    {
      name: 'firstName',
      valid: false
    },
    {
      name: 'lastName',
      valid: false
    },
    {
      name: 'email',
      valid: false
    },
    {
      name: 'birthdate',
      valid: false
    },
    {
      name: 'quantity',
      valid: false
    },
    {
      name: 'radioButtons',
      valid: false
    },
    {
      name: 'usingConditions',
      valid: false
    }
  ];


  // Error messages
  let firstNameError = this.document.querySelector(".first-name-error");
  let lastNameError = this.document.querySelector(".last-name-error");
  let emailError = this.document.querySelector(".email-error");
  let birthdateError = this.document.querySelector(".birthdate-error");
  let quantityError = this.document.querySelector(".quantity-error");
  let locationError = this.document.querySelector(".location-error");
  let usingConditionsError = this.document.querySelector(".using-conditions-error");

  // Regex
  let datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Fonction qui vérifie la longueur de la valeur de input
  function minLengthValidator(errorElement, minLengthNumber, inputValue) {
    if (inputValue && inputValue.length >= minLengthNumber) {
      errorElement.style.display = "none";
    } else {
      errorElement.style.display = "block";
    }
  }
  
  // Fonction qui vérifie la conformité de l'adresse email
  function emailValidator(input, errorElement) {
    if (input.match(emailPattern)) {
      errorElement.style.display = "none";
    } else {
      errorElement.style.display = "block";
    }
  }

  // Fonction qui vérifie la conformité de la date de naissance
  function dateValidator(input, errorElement) {
    if (input.match(datePattern)) {
      errorElement.style.display = "none";
    } else {
      errorElement.style.display = "block";
    }
  }

  // Fonction qui vérifie si un bouton radio est checked
  function radioValidator(input, errorElement) {
    let count = false;
    for (let radio of input){
      if (radio.checked){
        errorElement.style.display = "none";
        return count = true;
      }
      errorElement.style.display = "block";
    }
  }

  // Fonction qui vérifie si un checkbox est checked
  function checkedValidator(input, errorElement) {
    if (input.checked == true) {
      errorElement.style.display = "none";
    } else {
      errorElement.style.display = "block";
    }
  }

  //****************************//
  //*****      Event      *****//
  //**************************//
  

  //On appelle la fonction de validation à l'interaction avec input firstname
  firstName.addEventListener("input", function () {
    minLengthValidator(firstNameError, 2, this.value);
  });

  //On appelle la fonction de validation à l'interaction avec input lastname
  lastName.addEventListener("input", function () {
    minLengthValidator(lastNameError, 2, this.value);
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
    minLengthValidator(quantityError, 1, this.value);
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
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); //stop form from submitting
  });
});
