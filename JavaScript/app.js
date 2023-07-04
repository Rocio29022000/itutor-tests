"use strict"
console.log("This is the OG")

//Target elements
const questionName = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

//empty array to push new questions when created
let allQuestions = [];
let questions = ["01", "02", "03", "04", "05"]

//Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
function randomNum(){
    // return Math.floor(Math.random() * allQuestions.length);
    return Math.floor(Math.random()*questions.length);

}

  //Construct Fill in questions
function Fill(questionName, src, alt) {
    this.questionName = questionName;
    this.src = src;
    this.alt = alt;
    allQuestions.push(this)
  }

function renderFill(){
    let q1 = randomNum();
    console.log("This is image " + q1);
    question.src = allQuestions[q1].src;
    question.alt = allQuestions[q1].alt;
  
  }

// Create new instances of an object (create new question)
for (let i=0; i < questions.length; i++){
    new Fill(questions[i], `/Assets/Maths/c1/Easy/Fill/${questions[i]}.png`);
}

renderFill();







//Write the question name
// for (let i=0; i<testQuestions.length; i++){
//     let h2 = document.createElement("h2");
//     h2.textContent = `Question ${testQuestions[i]} : `;
//     questionName.appendChild(h2);
// }