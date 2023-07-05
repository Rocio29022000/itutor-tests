"use strict";

// Wait for document to load
  document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");
      
// Get our button switcher
  let themeSwitcher = document.getElementById("theme-switcher");
      
// When our button gets clicked
  themeSwitcher.onclick = function() {
// Get the current selected theme, on the first run
// it should be `light`
  let currentTheme = document.documentElement.getAttribute("data-theme");
      
// Switch between `dark` and `light`
  let switchToTheme = currentTheme === "dark" ? "light" : "dark"
      
// Set our current theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);
          }
        }
        );


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
