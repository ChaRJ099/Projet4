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

  // // launch modal form
  // function launchModal() {
  //   modalbg.style.display = "block";
  // }

  // // close modal form
  // function closeModal() {
  //   modalbg.style.display = "none";
  // }

  // // launch modal confirm message
  // function launchModalConfirm() {
  //   modalConfirm.style.display = "block";
  // }

  // // close modal confirm message
  // function closeModalConfirm() {
  //   modalConfirm.style.display = "none";
  // }

  /**
   * If the element's display property is set to block, set it to none. Otherwise, set it to block
   * @param element - The element that you want to toggle.
   * @returns the value of the element.style.display property.
   */
   function toggleModal(element) {
    return element.style.display === 'block'
      ? (element.style.display = 'none')
      : (element.style.display = 'block');
  }

  // launch modal event
  // modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  modalBtn.forEach(btn =>
    btn.addEventListener('click', function () {
      toggleModal(modalbg);
    })
  );

  // Close modal event
  // modalCloseBtn.addEventListener("click", closeModal);
  modalCloseBtn.addEventListener('click', function () {
    toggleModal(modalbg);
  });

  // Close Confirm event
  // closeConfirm.addEventListener("click", closeModalConfirm);
  // closeConfirmButton.addEventListener("click", closeModalConfirm);
  closeConfirm.addEventListener('click', function () {
    toggleModal(modalConfirm);
  });

  closeConfirmButton.addEventListener('click', () => {
    toggleModal(modalConfirm);
  });  

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

  /* It's an object that contains regular expressions that we can use to validate the input fields. */
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

  /* It's an object that contains regular expressions that we can use to validate the input fields. */
  // let datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  // let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const firstLastNamePattern = /^[a-zA-Z]{2,}$/;

  /* It's an object that contains regular expressions that we can use to validate the input fields. */
  const RegexPattern = {
    datePattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    emailPattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    fullNamePattern: /^[a-zA-Z]{2,}$/,
    quantityPattern: /^[0-9-]{0,}[0-9]$/
  };

  /**
   * It takes in three arguments, the first one is the value of the input, the second one is the name of
   * the input, and the third one is the pattern that we want to match the input value against
   * @param inputValue - The value of the input field
   * @param name - The name of the input field.
   * @param [pattern] - The pattern to match against.
   */

   function validatorEngin(inputValue, name, pattern = '') {
    if (inputValue.trim().match(RegexPattern[pattern])) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    }
    if (!inputValue.trim().match(RegexPattern[pattern])) {
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

  // Fonction qui vérifie la conformité des inputs names
  // function namesValidator(inputValue, name) {
  //   if (inputValue.trim().match(firstLastNamePattern)) {
  //     formData[name].isValid = true;
  //     formData[name].inputName.parentNode.removeAttribute('data-error');
  //     formData[name].inputName.parentNode.removeAttribute('data-error-visible');
  //   } else {
  //     formData[name].isValid = false;
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error',
  //       formData[name].errorMessage
  //     );
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error-visible',
  //       'true'
  //     );
  //   }
  // }

   // Fonction qui vérifie la longueur de la valeur de input
  // function minLengthValidator(minLengthNumber, inputValue, name) {
  //   if (inputValue && inputValue.length >= minLengthNumber) {
  //     formData[name].isValid = true;
  //     formData[name].inputName.parentNode.removeAttribute('data-error');
  //     formData[name].inputName.parentNode.removeAttribute('data-error-visible');
  //   } else {
  //     formData[name].isValid = false;
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error',
  //       formData[name].errorMessage
  //     );
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error-visible',
  //       'true'
  //     );
  //   }
  // }
  
  // Fonction qui vérifie la conformité de l'adresse email
  // function emailValidator(inputValue, name) {
  //   if (inputValue.match(emailPattern)) {
  //     formData[name].isValid = true;
  //     formData[name].inputName.parentNode.removeAttribute('data-error');
  //     formData[name].inputName.parentNode.removeAttribute('data-error-visible');
  //   } else {
  //     formData[name].isValid = false;
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error',
  //       formData[name].errorMessage
  //     );
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error-visible',
  //       'true'
  //     );
  //   }
  // }

  // Fonction qui vérifie la conformité de la date de naissance
  // function dateValidator(inputValue, name) {
  //   if (inputValue.match(datePattern)) {
  //     formData[name].isValid = true;
  //     formData[name].inputName.parentNode.removeAttribute('data-error');
  //     formData[name].inputName.parentNode.removeAttribute('data-error-visible');
  //   } else {
  //     formData[name].isValid = false;
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error',
  //       formData[name].errorMessage
  //     );
  //     formData[name].inputName.parentNode.setAttribute(
  //       'data-error-visible',
  //       'true'
  //     );
  //   }
  // }

  /**
   * It takes in an array of radio buttons and a name, and then loops through the array to check if any
   * of the radio buttons are checked. If one is checked, it sets the isValid property of the formData
   * object to true, and removes the error message. If none are checked, it sets the isValid property
   * to false, and adds the error message
   * @param inputs - the radio buttons
   * @param name - the name of the input
   * @returns the value of the variable count.
   */
  function radioValidator(inputs, name) {
    for (let radio of inputs){
      // if (radio.checked === true){
      //   formData[name].isValid = true;
      //   formData[name].parentName.removeAttribute('data-error');
      //   formData[name].parentName.removeAttribute('data-error-visible');
      //   return count = true;
      // }
      if (Boolean(radio.checked)) {
        formData[name].isValid = true;
        formData[name].parentName.removeAttribute('data-error');
        formData[name].parentName.removeAttribute('data-error-visible');
        return (count = true);
      }
      // formData[name].isValid = false;
      // formData[name].parentName.setAttribute('data-error', formData[name].errorMessage);
      // formData[name].parentName.setAttribute('data-error-visible', 'true');
      formData[name].parentName.setAttribute(
        'data-error',
        formData[name].errorMessage
      );
      formData[name].parentName.setAttribute('data-error-visible', 'true');
    }
  }

   /**
   * If the input is checked, remove the error message and set the isValid property to true. If the
   * input is not checked, add the error message and set the isValid property to false
   * @param input - the input element
   * @param name - the name of the input field
   */
  function checkedValidator(input, name) {    
    // if (input.checked === true) {
    //   formData[name].isValid = true;
    //   formData[name].inputName.parentNode.removeAttribute('data-error');
    //   formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    // } else {
    //   formData[name].isValid = false;
    //   formData[name].inputName.parentNode.setAttribute('data-error', formData[name].errorMessage);
    //   formData[name].inputName.parentNode.setAttribute('data-error-visible', 'true');
    if (Boolean(input.checked)) {
      formData[name].isValid = true;
      formData[name].inputName.parentNode.removeAttribute('data-error');
      formData[name].inputName.parentNode.removeAttribute('data-error-visible');
    } else {
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

   /**
   * If any of the formData elements are not valid, return false. Otherwise, return true
   * @returns A boolean value.
   */
    const canValidateRegistration = () => {
      for (const element in formData) {
        if (!Boolean(formData[element].isValid)) {
          return false;
        }
      }
      return true;
    };

  //****************************//
  //*****      Event      *****//
  //**************************//

  //On appelle la fonction de validation à l'interaction avec input firstname
  firstName.addEventListener("input", function () {
    validatorEngin(this.value, 'firstName', 'fullNamePattern');
  });

  //On appelle la fonction de validation à l'interaction avec input lastname
  lastName.addEventListener("input", function () {
    validatorEngin(this.value, 'lastName', 'fullNamePattern');
  });

  //On appelle la fonction de validation à l'interaction avec input email
  email.addEventListener("input", function () {
    validatorEngin(this.value, 'email', 'emailPattern');
  });

  //On appelle la fonction de validation à l'interaction avec input email
  birthdate.addEventListener("input", function () {
    validatorEngin(this.value, 'birthdate', 'datePattern');
  });

  //On appelle la fonction de validation à l'interaction avec input quantity
  quantity.addEventListener("input", function () {
    validatorEngin(this.value, 'quantity', 'quantityPattern');
  });

  //On appelle la fonction de validation à l'interaction avec click input radio
  for (let radio of radioButtons){
    radio.addEventListener('click', function () {
      radioValidator(radioButtons, 'radioButtons');
    });
  }
  
  //On appelle la fonction de validation à l'interaction avec input unsingConditions
  usingConditions.addEventListener('input', function () {
    checkedValidator(this, 'usingConditions');
  });


  //On appelle toutes les validations à l'interaction avec input submit
  submit.addEventListener('click', function () {
    validatorEngin(firstName.value, 'firstName', 'fullNamePattern');
    validatorEngin(lastName.value, 'lastName', 'fullNamePattern');
    validatorEngin(email.value, 'email', 'emailPattern');
    validatorEngin(birthdate.value, 'birthdate', 'datePattern');
    validatorEngin(quantity.value, 'quantity', 'quantityPattern');
    radioValidator(radioButtons, 'radioButtons');
    checkedValidator(usingConditions, 'usingConditions');

    // let isFormValid = true;
    
    // for (const element in formData) {
    //   if (formData[element].isValid === false) {
    //     isFormValid = false;
    //   }
    // }

    // if (isFormValid) {
    //   launchModalConfirm();
    //   form.reset();
    //   closeModal();
    // }
    if (canValidateRegistration()) {
      toggleModal(modalConfirm);
      form.reset();
      toggleModal(modalbg);
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault(); //stop form from submitting
  });
});
