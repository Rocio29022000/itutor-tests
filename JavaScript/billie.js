"use strict";

function checkTheme(){
  const localStoreTheme = localStorage.getItem("Theme")
  if (localStorage !== null && localStoreTheme === "dark"){
    document.body.className = localStoreTheme
    themeSwitch.checked = true;
  }else{
    themeSwitch.checked = false;
  }
}

checkTheme()
function clickHandler(){
  console.log("click")
if (this.checked){
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("Theme", "dark")
}else{ 
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  localStorage.setItem("Theme", "light");
}
}

themeSwitch.addEventListener("click", clickHandler)


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
