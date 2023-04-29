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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mailUser = document.getElementById("email");
const birthdateUser = document.getElementById("birthdate");
const turnamentNumber = document.getElementById("number");
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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// test if email is valid
function isEmailValid() {
  var emailRegEx = o;

  if(!emailRegEx.test(mailUser)) {
    console.log(mailUser + " n'est pas valide")
    return false;
  } else {
      return true;
  }
}

// test if the input contains only numbers
function isContainOnlyNumber() {
  var numberRegEx = o;

  if(!numberRegEx.test(turnamentNumber)) {
    console.log("Ce champ ne doit contenir que des chiffres")
  } else {
      return true;
  }
}

// form validate
function validate() {
  if(firstName != '' && firstName > 1) {
    console.log("Veuillez saisir un prénom valide")
  }
  if(lastName != '' && lastName > 1) {
    console.log("Veuillez saisir un nom valide")
  }
  //isEmailValid();
  //isContainOnlyNumber();
  for(let i = 1; i <= 6; i++)
  {
    const loc = "location" + i;
    const location = document.getElementById(loc);
    if(!location.checked) {
      console.log("Veuillez sélectionner une location")
      return false;
    }
  }
  if(!check1) {
    console.log("Veuillez accepter les conditions d'utilisation")
  }
}
