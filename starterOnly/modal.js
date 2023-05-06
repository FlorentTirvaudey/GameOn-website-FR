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

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mailUser = document.getElementById("email");
const birthdateUser = document.getElementById("birthdate");
const turnamentNumber = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const check1 = document.getElementById("checkbox1");
const check2 = document.getElementById("checkbox2");

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

    if(input.name == 'first') {
      if(inputValue < 2) {
        console.log('prénom trop court');
        isValid = false;
      }
    }
    if(input.name == 'last') {
      if(inputValue < 2) {
        console.log('nom trop court');
        isValid = false;
      }
    }
    if(input.type == 'email' && !emailRegEx.test(inputValue)) {
      console.log(inputValue + " n'est pas valide");
      isValid = false;
    }
    if(input.type == 'number' && !numberRegEx.test(inputValue)) {
      console.log("Ce champ ne doit contenir que des chiffres");
      isValid = false;
    }
    if(input.type == 'radio') {
      inputRadio.forEach((check) => {
        if(check.checked) {
          isRadioChecked = true;
        }
      })
      if(isRadioChecked == false) {
        isValid = false;
        console.log("Il faut sélectionner au moins une location");
      }
    }
    if(input.id == "checkbox1") {
        if(!inputCheckbox.checked) {
          isValid = false;
          console.log("Vous devez accepté les conditions d'utilisation");
        }
    }
  })
  if(!isValid) {
    return false;
  } else {
    return true;
  }
}