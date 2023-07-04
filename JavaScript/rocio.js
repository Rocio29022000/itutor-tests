"use strict"
console.log("This is a test")

//Target elements
const questionName = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

//Set number of questions for test
let maxQuestions = 2;

//empty array to push new questions when created
let testQuestions = [];
let shownQuestions = [];
let possibleQuestions = ["diff-01", "diff-02", "int-01", "int-02", "surd-01"]

//Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
function randomNum(){
    // return Math.floor(Math.random() * testQuestions.length);
    return Math.floor(Math.random()*possibleQuestions.length);

}

  //Construct Fill in questions
function Fill(name, src) {
    this.name = name;
    this.src = src;
    testQuestions.push(this)
  }

// Create new instances of an object (create new question)
for (let i=0; i < possibleQuestions.length; i++){
    new Fill(possibleQuestions[i], `/Assets/Maths/c1/Easy/Fill/${possibleQuestions[i]}.png`);
}

function renderFill(){
    let q1 = randomNum();
    console.log("This is image " + q1);
    question.src = testQuestions[q1].src;
    question.alt = testQuestions[q1].name;
  
}
console.log(testQuestions)

renderFill();






















 
// //Target elements
// const questionName = document.getElementById("question-area");
// const question = document.getElementById("question");

// //empty array to push new questions when created
// let allQuestions = [];
// let questions = ["01", "02"]

// //Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
// function randomNum(){
//     return Math.floor(Math.random() * allQuestions.length);
// }

// //Constructor function for new object (MCQ question)
// function MCQ(questionName, src, alt) {
//     this.questionName = questionName;
//     this.src = src;
//     this.alt = alt;
//     console.log(this.questionName);
//     console.log(this.src);
//     allQuestions.push(this)
//     // this.renderQ();
//   }

  
// // Create new instances of an object (create new question)
// for (let i=0; i < questions.length; i++){
//     new MCQ(questions[i], `/Assets/Maths/c1/Easy/MCQ/${questions[i]}.png`);
// }

// function renderQ(){
//     let q1 = randomNum();
//     console.log(q1);
//     question.src = allQuestions[q1].src;
//     question.alt = allQuestions[q1].alt;

// }
// renderQ();









// //Random number to select what question is shown
// // function randomNum(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// //   }

// // Constructor function to create new Question
// // with each question I want to create a question area and an answer area.



// // MCQ.prototype.renderQ = function(){
// //     this.questionName = questions[randomNum(0,1)]
// // }

// // function renderQ(){
// //     let question = questions[randomNum(0,1)];
// //     console.log (question)
// // }
// // renderQ();

// // const question1 = new MCQ(question, )