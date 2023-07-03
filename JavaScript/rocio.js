"use strict"
console.log("Hi!")

//Target elements
const questionName = document.getElementById("question-area");
const question = document.getElementById("question");

//empty array to push new questions when created
let allQuestions = [];
let questions = ["01", "02"]

//Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
function randomNum(){
    return Math.floor(Math.random() * allQuestions.length);
}

//Constructor function for new object (MCQ question)
function MCQ(questionName, src, alt) {
    this.questionName = questionName;
    this.src = src;
    this.alt = alt;
    console.log(this.questionName);
    console.log(this.src);
    allQuestions.push(this)
    // this.renderQ();
  }

// Create new instances of an object (create new question)
for (let i=0; i < questions.length; i++){
    new MCQ(questions[i], `/Assets/Maths/c1/Easy/MCQ/${questions[i]}.png`);
}

function renderQ(){
    let q1 = randomNum();
    console.log(q1);
    question.src = allQuestions[q1].src;
    question.alt = allQuestions[q1].alt;

}
renderQ();
















//Random number to select what question is shown
// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

// Constructor function to create new Question
// with each question I want to create a question area and an answer area.



// MCQ.prototype.renderQ = function(){
//     this.questionName = questions[randomNum(0,1)]
// }

// function renderQ(){
//     let question = questions[randomNum(0,1)];
//     console.log (question)
// }
// renderQ();

// const question1 = new MCQ(question, )