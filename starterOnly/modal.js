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
window.addEventListener("load", function () {
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
  const form = document.querySelector("#reserve-form");
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const usingConditions = document.querySelector("#checkbox1");
  const radioButtons = document.querySelectorAll(".radio-input");
  const submit = document.querySelector(".btn-submit");

  let formData = {
    firstName: {
      isValid: false,
      inputName: document.querySelector('#first'),
      errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du nom'
    },
    lastName: {
      isValid: false,
      inputName: document.querySelector('#last'),
      errorMessage:
        'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
    },
    email: {
      isValid: false,
      inputName: document.querySelector('#email'),
      errorMessage: 'Veuillez entrer une adresse email valide'
    },
    birthdate: {
      isValid: false,
      inputName: document.querySelector('#birthdate'),
      errorMessage: 'Vous devez entrer votre date de naissance'
    },
    quantity: {
      isValid: false,
      inputName: document.querySelector('#quantity'),
      errorMessage: 'Veuillez renseigner un nombre'
    },
    radioButtons: {
      isValid: false,
      inputName: document.querySelectorAll('.radio-input'),
      parentName: document.querySelector('.radio-buttons'),
      errorMessage: 'Vous devez choisir une option'
    },
    usingConditions: {
      isValid: false,
      inputName: document.querySelector('#checkbox1'),
      errorMessage: 'Vous devez vérifier que vous acceptez les termes et conditions'
    }
  };

  // Regexp
  let datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const firstLastNamePattern = /^[a-zA-Z]{2,}$/;

  // Fonction qui vérifie la conformité des inputs names
  function namesValidator(inputValue, name) {
    if (inputValue.trim().match(firstLastNamePattern)) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
      formData[name].isValid = false;
      formData[name].inputName.parentNode.setAttribute(
        'data-error',
        formData[name].errorMessage
      );
      formData[name].inputName.parentNode.setAttribute(
        'data-error-visible',
        'true'
      );
    }
  }

   // Fonction qui vérifie la longueur de la valeur de input
  function minLengthValidator(minLengthNumber, inputValue, name) {
    if (inputValue && inputValue.length >= minLengthNumber) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
      formData[name].isValid = false;
      formData[name].inputName.parentNode.setAttribute(
        'data-error',
        formData[name].errorMessage
      );
      formData[name].inputName.parentNode.setAttribute(
        'data-error-visible',
        'true'
      );
    }
  }
  
  // Fonction qui vérifie la conformité de l'adresse email
  function emailValidator(inputValue, name) {
    if (inputValue.match(emailPattern)) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
      formData[name].isValid = false;
      formData[name].inputName.parentNode.setAttribute(
        'data-error',
        formData[name].errorMessage
      );
      formData[name].inputName.parentNode.setAttribute(
        'data-error-visible',
        'true'
      );
    }
  }

  // Fonction qui vérifie la conformité de la date de naissance
  function dateValidator(inputValue, name) {
    if (inputValue.match(datePattern)) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
      formData[name].isValid = false;
      formData[name].inputName.parentNode.setAttribute(
        'data-error',
        formData[name].errorMessage
      );
      formData[name].inputName.parentNode.setAttribute(
        'data-error-visible',
        'true'
      );
    }
  }

  // Fonction qui vérifie si un bouton radio est checked
  function radioValidator(inputs, name) {
    
    let count = false;
    for (let radio of inputs){
      if (radio.checked === true){
        formData[name].isValid = true;
        formData[name].parentName.removeAttribute('data-error');
        formData[name].parentName.removeAttribute('data-error-visible');
        return count = true;
      }
      formData[name].isValid = false;
      formData[name].parentName.setAttribute('data-error', formData[name].errorMessage);
      formData[name].parentName.setAttribute('data-error-visible', 'true');
    }
  }

  // Fonction qui vérifie si un checkbox est checked
  function checkedValidator(input, name) {
    
    if (input.checked === true) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
      formData[name].isValid = false;
      formData[name].inputName.parentNode.setAttribute('data-error', formData[name].errorMessage);
      formData[name].inputName.parentNode.setAttribute('data-error-visible', 'true');
    }
  }

  //****************************//
  //*****      Event      *****//
  //**************************//

  //On appelle la fonction de validation à l'interaction avec input firstname
  firstName.addEventListener("input", function () {
    namesValidator(this.value, 'firstName');
  });

  //On appelle la fonction de validation à l'interaction avec input lastname
  lastName.addEventListener("input", function () {
    namesValidator(this.value, 'lastName');
  });

  //On appelle la fonction de validation à l'interaction avec input email
  email.addEventListener("input", function () {
    emailValidator(this.value, 'email');
  });

  //On appelle la fonction de validation à l'interaction avec input email
  birthdate.addEventListener("input", function () {
    dateValidator(this.value, 'birthdate');
  });

  //On appelle la fonction de validation à l'interaction avec input quantity
  quantity.addEventListener("input", function () {
    minLengthValidator(1, this.value, 'quantity');
  });

  //On appelle la fonction de validation à l'interaction avec click input radio
  for (let radio of radioButtons){
    radio.addEventListener("click", function() {
      radioValidator(radioButtons, 'radioButtons');
    });
  }
  
  //On appelle la fonction de validation à l'interaction avec input unsingConditions
  usingConditions.addEventListener("input", function () {
    checkedValidator(this, 'usingConditions');
  });


  //On appelle toutes les validations à l'interaction avec input submit
  submit.addEventListener("click", function () {
    namesValidator(firstName.value, 'firstName');
    namesValidator(lastName.value, 'lastName');
    emailValidator(email.value, 'email');
    dateValidator(birthdate.value, 'birthdate');
    minLengthValidator(1, quantity.value, 'quantity');
    radioValidator(radioButtons, 'radioButtons');
    checkedValidator(usingConditions, 'usingConditions');

    let isFormValid = true;
    
    for (const element in formData) {
      if (formData[element].isValid === false) {
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
});
