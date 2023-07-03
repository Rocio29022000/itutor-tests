"use strict"

//Target elements
const questionName = document.getElementById("question-area");

//Global variables
let testQuestions = [1,2];

//Write the question name
for (let i=0; i<testQuestions.length; i++){
    let h2 = document.createElement("h2");
    h2.textContent = `Question ${testQuestions[i]} : `;
    questionName.appendChild(h2);
}
