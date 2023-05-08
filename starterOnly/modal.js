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
  var birthdateRegEx = /^[0-9]{4}\-[01][0-9]\-[0-3][0-9]/;

  let isRadioChecked = false;
  let isValid = true;

  formData.forEach((data) => {
    debugger
    const input = data.querySelector('input');
    const inputValue = input.value.trim();
    const inputRadio = data.querySelectorAll('input[type="radio"]');
    
    if(input.name == 'first' || input.name == 'last') {
      console.log(inputValue.length)
        if(inputValue.length < 2) {
          data.setAttribute('data-error-visible', 'true');
          isValid = false;
        } else {
          data.removeAttribute('data-error-visible');
        }
    }
    else if(input.type == 'email') {
      if(!emailRegEx.test(inputValue)) {
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    else if(input.type == 'date') {
      if(!birthdateRegEx.test(inputValue) || inputValue == '') {
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    else if(input.type == 'number') {
      if(!numberRegEx.test(inputValue)) {
        console.log("Ce champ ne doit contenir que des chiffres");
        isValid = false;
        data.setAttribute('data-error-visible', 'true');
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    else if(input.type == 'radio') {
      inputRadio.forEach((check) => {
        if(check.checked) {
          isRadioChecked = true;
        }
      })
      if(isRadioChecked == false) {
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
     else if(input.type == 'checkbox') {
        if(input.id == "checkbox1") {
            if(!input.checked) {
              data.setAttribute('data-error-visible', 'true');
              console.log("Vous devez accepté les conditions d'utilisation");
              isValid = false;
            } else {
              data.removeAttribute('data-error-visible');
            }
        }
    }
  })
  if(!isValid) {
    return false;
  } else {
    return true;
  }
}