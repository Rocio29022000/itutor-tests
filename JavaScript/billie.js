"use strict";

let darkMode = false;

// add event listeners to the buttons
document.getElementById("darkButton").addEventListener("click", enterDarkMode);

document.getElementById("lightButton").addEventListener("click", enterLightMode);

//  create a dark mode function
function enterDarkMode() {
  let body = document.body;
  let iTutor = document.getElementById("iTutor");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  iTutor.classList.remove("light");
  body.classList.add("dark");
  iTutor.classList.add("dark");
  button.setAttribute("checked", "checked");
  // local storage
  darkMode = true;
  // console.log(darkMode);
  saveMode();
}

function enterLightMode() {
  let body = document.body;
  let iTutor = document.getElementById("iTutor");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  iTutor.classList.remove("dark");
  body.classList.add("light");
  iTutor.classList.add("light");
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
  }
  if (storedMode === false) {
    console.log("light");
    enterLightMode();
  } else if (storedMode) {
    console.log("dark");
    enterDarkMode();
  }
}
pageLoad();

  // let questionSection1 = prompt ("")
  //   if (questionSection1 === "2" && questionSection2 === "4" && questionSection3 = "c") 
  //   questionAnswer = true
   
    // q1 = new Fill(blah,blah.blah, [correctansw1, correctansw2,])

    // <p>E=M <input type='text' id='q1' maxlength='1' size='2'/> ^2 </p>



// fill-in-the-blank                    // some default input if the student doesn't enter anything
// say three options for student [] = M[]<sup>[]</sup>
// in object, save full correct answer in array ['E','C','2'] - use stringify, and toUpperCase


//mark = 0
// helper function (studentAns, correctInput) {
// for correctInput {
//    studentAns[i] === conrrectInput[i]
        //mark++
//}   
//}
