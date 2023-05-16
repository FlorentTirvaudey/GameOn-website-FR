function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground.form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const confirm = document.querySelector(".bground.confirm");
const closeValidation = document.querySelector(".btn-submit.close_validation");
const cross = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.forEach((croix) => {
  croix.addEventListener("click", closeModal);
})

// close validation window
closeValidation.addEventListener("click", closeValid);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
function closeModal() {
  if(modalbg.style.display = "block") {
    modalbg.style.display = "none";
  }
  if(confirm.style.display = "block") {
    confirm.style.display = "none";
  }
}

// close validation window
function closeValid() {
  if(confirm.style.display = "block") {
    confirm.style.display = "none";
  }
}

// form validate
document.getElementById('form_modal').addEventListener('submit', (event) => {
  event.preventDefault();

  // waiting formats for input email, number and birthdate
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;           // contain a string in the shape of 'aa@aa.com'
  var numberRegEx = /^\d$/;                                // contain only numbers
  var birthdateRegEx = /^[0-9]{4}\-[01][0-9]\-[0-3][0-9]/; // contain a string in the shape of '2023-01-01'
  
  let isRadioChecked = false;
  let isValid = true; // true : input is valid, false : is not valid, we can prevent the submit of the form if this boolean is false
  
  // travel all data in this form
  formData.forEach((data) => {
    const input = data.querySelector('input');
    const inputValue = input.value.trim(); // ignore spaces in the current input
    const inputRadio = data.querySelectorAll('input[type="radio"]');
    
    if(input.name == 'first' || input.name == 'last') {
      // check if name and lastname input values contain more than 2 letters
        if(inputValue.length < 2) {
          data.setAttribute('data-error-visible', 'true'); // display error message
          isValid = false;
        } else {
          data.removeAttribute('data-error-visible'); // remove error message
        }
    }
    else if(input.type == 'email') {
      // check if email input value match with the emailRegex
      if(!emailRegEx.test(inputValue)) {
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    else if(input.type == 'date') {
      // check if birthdate input value match with the birthdateRegex
      if(!birthdateRegEx.test(inputValue) || inputValue == '') {
        data.setAttribute('data-error-visible', 'true');
        isValid = false;
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    else if(input.type == 'number') {
      // check if this input value match with the numberRegex
      if(!numberRegEx.test(inputValue)) {
        console.log("Ce champ ne doit contenir que des chiffres");
        isValid = false;
        data.setAttribute('data-error-visible', 'true');
      } else {
        data.removeAttribute('data-error-visible');
      }
    }
    // travel all radiobox and test if atleast one is checked
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
      // check if this checkbox is checked and prevent the submit if not
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
  });
  
  if(!isValid) {
    event.preventdefault(); // prevent the submit of this form
  } else {
    modalbg.style.display = "none";  // remove form block
    confirm.style.display = "block"; // display validation message
    event.preventdefault();
  }
})
