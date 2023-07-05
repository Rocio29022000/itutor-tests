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

// Rendering the questions

function renderFillQ(){

    let q1 = randomNum();
    console.log("This is image " + q1);
    question.src = testQuestions[q1].src;
    question.alt = testQuestions[q1].name;
    shownQuestions.push(q1);
    console.log(shownQuestions)
    console.log(testQuestions[q1].name)
    if (testQuestions[q1].name == "diff-01"){
        answerDiff01();
    } else if (testQuestions[q1].name == "diff-02"){
        answerDiff02();
    }else if (testQuestions[q1].name == "int-01"){
        answerInt01();
    }else if (testQuestions[q1].name == "int-02"){
        answerInt02();
    }else {
        answerSurd01();
    }

    let button = document.createElement("BUTTON");
    let next = document.createTextNode("Next");
    button.appendChild(next)
    questionAnswer.appendChild(button)
}

// function renderFillA(){
//     if ()

//     let button = document.createElement("BUTTON");
//     let next = document.createTextNode("Next");
//     button.appendChild(next)
//     questionAnswer.appendChild(button)
// }

renderFillQ();
// renderFillA();


function answerDiff01(){
    let form = document.createElement("FORM");
    form.setAttribute("type", "text");
    let fieldset = document.createElement("FIELDSET")
    let legend = document.createElement("LEGEND")
    legend.textContent = " Answer Area: "
    let label = document.createElement("LABEL")
    label.textContent = "Your Answer: "
    let input = document.createElement("INPUT")
    input.setAttribute("type", "number")
    fieldset.appendChild(legend)
    fieldset.appendChild(label)
    fieldset.appendChild(input)
    form.appendChild(fieldset)
    questionAnswer.appendChild(form)
}

function answerDiff02(){
    let form = document.createElement("FORM");
    form.setAttribute("type", "text");
    let fieldset = document.createElement("FIELDSET")
    let legend = document.createElement("LEGEND")
    legend.textContent = " Answer Area: "
    let label1 = document.createElement("LABEL")
    label1.textContent = "Gradient: "
    let input1 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.textContent = "m: "
    let input2 = document.createElement("INPUT")
    let label3 = document.createElement("LABEL")
    label3.textContent = "c: "
    let input3 = document.createElement("INPUT")
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    input3.setAttribute("type", "number")
    fieldset.appendChild(legend)
    fieldset.appendChild(label1)
    fieldset.appendChild(input1)
    fieldset.appendChild(label2)
    fieldset.appendChild(input2)
    fieldset.appendChild(label3)
    fieldset.appendChild(input3)
    form.appendChild(fieldset)
    questionAnswer.appendChild(form)
}
function answerInt01(){
    let form = document.createElement("FORM");
    form.setAttribute("type", "text");
    let fieldset = document.createElement("FIELDSET")
    let legend = document.createElement("LEGEND")
    legend.textContent = " Answer Area: "
    let label1 = document.createElement("LABEL")
    label1.textContent = "Answer: "
    let input1 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.innerHTML = "x<sup>4</sup> +"
    let input2 = document.createElement("INPUT")
    let label3 = document.createElement("LABEL")
    label3.textContent = "x + "
    let input3 = document.createElement("INPUT")
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    input3.setAttribute("type", "text")
    fieldset.appendChild(legend)
    fieldset.appendChild(label1)
    fieldset.appendChild(input1)
    fieldset.appendChild(label2)
    fieldset.appendChild(input2)
    fieldset.appendChild(label3)
    fieldset.appendChild(input3)
    form.appendChild(fieldset)
    questionAnswer.appendChild(form)
}
function answerInt02(){
    let form = document.createElement("FORM");
    form.setAttribute("type", "text");
    let fieldset = document.createElement("FIELDSET")
    let legend = document.createElement("LEGEND")
    legend.textContent = " Answer Area: "
    let label1 = document.createElement("LABEL")
    label1.textContent = "Answer: "
    let input1 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.innerHTML = "x<sup>6</sup> +"
    let input2 = document.createElement("INPUT")
    let label3 = document.createElement("LABEL")
    label3.innerHTML = "x<sup>4</sup> +"
    let input3 = document.createElement("INPUT")
    let label4 = document.createElement("LABEL")
    label4.textContent = "x + c"
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    input3.setAttribute("type", "text")
    fieldset.appendChild(legend)
    fieldset.appendChild(label1)
    fieldset.appendChild(input1)
    fieldset.appendChild(label2)
    fieldset.appendChild(input2)
    fieldset.appendChild(label3)
    fieldset.appendChild(input3)
    fieldset.appendChild(label4)
    form.appendChild(fieldset)
    questionAnswer.appendChild(form)
}
function answerSurd01(){
    let form = document.createElement("FORM");
    form.setAttribute("type", "text");
    let fieldset = document.createElement("FIELDSET")
    let legend = document.createElement("LEGEND")
    legend.textContent = " Answer Area: "
    let label1 = document.createElement("LABEL")
    label1.textContent = "a: "
    let input1 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.textContent = "b: "
    let input2 = document.createElement("INPUT")
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    fieldset.appendChild(legend)
    fieldset.appendChild(label1)
    fieldset.appendChild(label2)
    fieldset.appendChild(input1)
    fieldset.appendChild(label2)
    fieldset.appendChild(input2)
    form.appendChild(fieldset)
    questionAnswer.appendChild(form)
}





















 
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