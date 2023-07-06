"use strict";

function checkTheme() {
  const localStoreTheme = localStorage.getItem("Theme");
  if (localStorage !== null && localStoreTheme === "dark") {
    document.body.className = localStoreTheme;
    themeSwitch.checked = true;
  } else {
    themeSwitch.checked = false;
  }
}

checkTheme();
function clickHandler() {
  console.log("click");
  if (this.checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("Theme", "dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("Theme", "light");
  }
}

themeSwitch.addEventListener("click", clickHandler);
