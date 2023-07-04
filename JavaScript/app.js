"use strict"
console.log("This is the OG")

//Target elements
const questionName = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

//empty array to push new questions when created
let allQuestions = [];
let questions = ["01", "02"]

//Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
function randomNum(min, max){
    // return Math.floor(Math.random() * allQuestions.length);
    return Math.floor(Math.random()*questions.length);

}

//Constructor function for new object (MCQ question)
function MCQ(questionName, src, alt) {
    this.questionName = questionName;
    this.src = src;
    this.alt = alt;
    allQuestions.push(this)
  }

  //Construct Fill in questions
function Fill(questionName, src, alt) {
    this.questionName = questionName;
    this.src = src;
    this.alt = alt;
    allQuestions.push(this)
  }

function renderMCQ(){
    let q1 = randomNum();
    console.log("This is MCQ " + q1);
    question.src = allQuestions[q1].src;
    question.alt = allQuestions[q1].alt;
}

function renderFill(){
    let q1 = randomNum();
    console.log("This is Fill-in " + q1);
    question.src = allQuestions[q1].src;
    question.alt = allQuestions[q1].alt;
  
  }
// Create new instances of an object (create new question)
for (let i=0; i < questions.length; i++){
    new MCQ(questions[i], `/Assets/Maths/c1/Easy/MCQ/${questions[i]}.png`);
}
console.log(allQuestions)
// Create new instances of an object (create new question)
for (let i=0; i < questions.length; i++){
    new Fill(questions[i], `/Assets/Maths/c1/Easy/Fill/${questions[i]}.png`);
  }
  console.log(allQuestions)
function mcqOrFill(){
    let mcqOrFill = randomNum();
    console.log(mcqOrFill)
    if (mcqOrFill == 1){
        renderMCQ();
        console.log("hi")
    } else {
        renderFill();
        console.log(allQuestions)
    }
}
mcqOrFill();






//Write the question name
// for (let i=0; i<testQuestions.length; i++){
//     let h2 = document.createElement("h2");
//     h2.textContent = `Question ${testQuestions[i]} : `;
//     questionName.appendChild(h2);
// }