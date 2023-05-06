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
const formData = document.querySelectorAll(".formData");
const formFirstname = document.getElementById("first");
const formLastname = document.getElementById("last");

const cross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
function closeModal() {
  if (modalbg.style.display = "block") {
    modalbg.style.display = "none";
  }
}

// form validate
function validate() {
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var numberRegEx = /^\d$/;

  let isRadioChecked = false;
  let isValid = true;

  formData.forEach((data) => {
    const input = data.querySelector('input');
    const inputValue = input.value.trim();
    const inputRadio = data.querySelectorAll('input[type="radio"]');
    const inputCheckbox = data.querySelector('input[id="checkbox1"]');

    
    if(input.name == 'first' || input.name == 'last') {
      console.log(inputValue.length)
        if(inputValue.length < 2) {
          data.setAttribute('data-error-visible', 'true');
          isValid = false;
        } else {
          data.removeAttribute('data-error-visible');
          isValid = true;
        }
    }
    if(input.type == 'email') {
      if(!emailRegEx.test(inputValue)) {
        console.log(inputValue + " n'est pas valide");
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
        isValid = true;
      }
    }
    if(input.type == 'number') {
      if(!numberRegEx.test(inputValue)) {
        console.log("Ce champ ne doit contenir que des chiffres");
        isValid = false;
        data.setAttribute('data-error-visible', 'true');
      } else {
        data.removeAttribute('data-error-visible');
        isValid = true;
      }
    }
    if(input.type == 'radio') { // todo: valide le formulaire si checked ??
      inputRadio.forEach((check) => {
        if(check.checked) {
          isRadioChecked = true;
        }
      })
      if(isRadioChecked == false) {
        console.log("Il faut sélectionner au moins une location");
        data.setAttribute('data-error-visible', 'true'); // todo: conflit entre la checkbox et les input radio
        return false;
      } else {
        data.removeAttribute('data-error-visible');
        isValid = true;
      }
    }
    if(input.id == "checkbox1") { // todo: valide le formulaire si checked ??
        if(!inputCheckbox.checked) {
          isValid = false;
          data.setAttribute('data-error-visible', 'true');
          console.log("Vous devez accepté les conditions d'utilisation");
        } else {
          data.removeAttribute('data-error-visible');
          isValid = true;
        }
    }
  })
  if(!isValid) {
    return false;
  } else {
    return true;
  }
}