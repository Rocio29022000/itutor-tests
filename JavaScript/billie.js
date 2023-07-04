"use strict"

const questionName = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

let allQuestions = [];
let questions = ["01", "02"]

function randomNum(){
  return Math.floor(Math.random() * allQuestions.length);
}

//FOR NOW: Construct Fill in questions
function Fill (questionName, qMin, qMax) {
    this.questionName = questionName;
    this.qMin = qMin;
    this.qMax = qMax;
    this.render();
  }

  for (let i = 0; i < questions.length; i++) {
    new Fill(questions[i], `assets/maths/c1/easy/Fill${questions[i]}.png`);

  }

  function renderQ(){
    let q1 = randomNum();
    console.log(q1);
    question.src = allQuestions[q1].src;
    question.alt = allQuestions[q1].alt;

}
renderQ();

  // let questionSection1 = prompt ("")
  //   if (questionSection1 === "2" && questionSection2 === "4" && questionSection3 = "c") 
  //   questionAnswer = true
   
    // q1 = new Q(blah,blah.blah, [correctansw1, correctansw2,])

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


