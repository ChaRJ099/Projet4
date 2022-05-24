// DOM loading
window.addEventListener("load", function(){

  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCloseBtn = document.querySelector(".close");


  // launch modal event
  modalBtn.forEach(
    (btn) => btn.addEventListener("click", launchModal)
    );

  // Close modal event
  modalCloseBtn.addEventListener("click", closeModal);

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  };

  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  };

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
  let formRadio = document.querySelector(".form-radio");
  let inputRadios = document.querySelectorAll(".radio-input");
  console.log(inputRadios);
  let submit = document.querySelector(".btn-submit");
  
  let formData = [
    {
      name: "firstName",
      error: null
    },
    {
      name: "lastName",
      error: null
    },
    {
      name: "email",
      error: null
    },
    {
      name: "birthdate",
      error: null
    },
    {
      name: "quantity",
      error: null
    },
    {
      name: "inputRadios",
      error: null
    },
    {
      name: "usingConditions",
      error: null
    }
  ];

  let firstNameError = this.document.querySelector(".first-name-error"); // Message d'erreur de first name
  let lastNameError = this.document.querySelector(".last-name-error"); // Message d'erreur de last name
  let emailError = this.document.querySelector(".email-error"); // Message d'erreur de email
  let birthdateError = this.document.querySelector(".birthdate-error");
  let quantityError = this.document.querySelector(".quantity-error");
  let locationError = this.document.querySelector(".location-error");
  let usingConditionsError = this.document.querySelector(".using-conditions-error");

  let datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  

  // Fonction qui vérifie la longueur de la valeur de input
  function minLengthValidator(errorElement, minLengthNumber, inputValue) {
    console.log(errorElement);
    console.log(minLengthNumber);
    console.log(inputValue);
    if(inputValue && inputValue.length >= minLengthNumber) {
      errorElement.style.display = "none";
    }
    else {
      errorElement.style.display = "block";
    }
  };


  function validateEmail(input, errorElement) {
    if (input.match(emailPattern)) {  
      errorElement.style.display = "none";  
    } else {  
      errorElement.style.display = "block";  
    }  
  }

  function validateRadio(inputs) {
    console.log(inputs)
    const radioChecked = (input) => input.checked === true;
    console.log(inputs.some(radioChecked));
    inputs.some(radioChecked);
  }

  function validateDate(input, errorElement) {
    if (input.match(datePattern)) {  
      errorElement.style.display = "none";  
    } else {  
      errorElement.style.display = "block";  
    }  
  }

  function checkedValidator(input, errorElement) {
    if (input.checked == true)	{
      return true;
      }
      else {
        errorElement.style.display = "block";
      }
    }

  birthdate.addEventListener("input", function() {
    validateDate(this.value, birthdateError);
  });

  email.addEventListener("input", function() {
    validateEmail(this.value, emailError); //On appelle la fonction de validation à l'interaction avec firstname
  });

  //On appelle la fonction de validation à l'interaction avec les input
  firstName.addEventListener("input", function() {
    minLengthValidator(firstNameError, 2, this.value); //On appelle la fonction de validation à l'interaction avec firstname
  });

  lastName.addEventListener("input", function() {
    minLengthValidator(lastNameError, 2, this.value); //On appelle la fonction de validation à l'interaction avec lastname
  });

  quantity.addEventListener("input", function() {
  minLengthValidator(quantityError, 1, this.value); //On appelle la fonction de validation à l'interaction avec quantity
  });



  usingConditions.addEventListener("input", function() {
    checkedValidator(this, usingConditionsError);
  });


    formRadio.addEventListener("input", function() {
      validateRadio(inputRadios);
    })


  submit.addEventListener("click", function() {
    minLengthValidator(firstNameError, 2, firstName.value);
    minLengthValidator(lastNameError, 2, lastName.value);
    validateEmail(email.value, emailError);
    validateDate(birthdate.value, birthdateError);
    minLengthValidator(quantityError, 1, quantity.value);
  });


  

  form.addEventListener("submit", function(e){
        e.preventDefault();    //stop form from submitting
  });

})