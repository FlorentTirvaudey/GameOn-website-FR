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

// validate form
function validate() {
  if(formFirstname.value >= 2 && formLastname >= 2) {
    console.log(formFirstname.value);
  }
}