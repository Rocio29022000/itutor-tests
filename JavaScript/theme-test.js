"use strict";

console.log("working");

let darkMode = false;

// add event listeners to the buttons
document.getElementById("themeSwitch").addEventListener("click", enterDarkMode);

document.getElementById("themeSwitchBack").addEventListener("click", enterLightMode);

//  create a dark mode function
function enterDarkMode() {
  let body = document.body;
  let button = document.getElementById("themeSwitch");
  body.classList.remove("light");
  body.classList.add("dark");
  button.setAttribute("checked", "checked");
  // local storage
  darkMode = true;
  // console.log(darkMode);
  saveMode();
}

function enterLightMode() {
  let body = document.body;
  let button = document.getElementById("themeSwitchBack");
  body.classList.remove("dark");
  body.classList.add("light");
  button.setAttribute("checked", "checked");
  //local storage
  darkMode = false;
  // console.log(darkMode);
  saveMode();
}

function saveMode() {
  let mode = JSON.stringify(darkMode);
  localStorage.setItem("darkMode", mode);
}

function pageLoad() {
  let storedMode = JSON.parse(localStorage.getItem("darkMode"));
  // console.log(storedMode);
  if (storedMode === null) {
    console.log("null");
    return;
  } else if(storedMode === false) {
    console.log("light");
    enterLightMode();
  } else if (storedMode) {
    console.log("dark");
    enterDarkMode();
  }
}
pageLoad();
