"use strict"
console.log("This is te OG")

//Target elements
const questionName = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

//Random Number generator CHECK IF QUESTIONS OR ALL QUESTIONS FOR THE LENGTH
function randomNum(){
    return Math.floor(Math.random() * allQuestions.length);
}




//Write the question name
// for (let i=0; i<testQuestions.length; i++){
//     let h2 = document.createElement("h2");
//     h2.textContent = `Question ${testQuestions[i]} : `;
//     questionName.appendChild(h2);
// }