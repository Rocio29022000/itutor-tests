"use strict"
console.log("This is a test")

//Target elements
const questionArea = document.getElementById("question-area");
const questionAnswer = document.getElementById("answer-area");
const question = document.getElementById("question");

//Set number of questions for test
let maxQuestions = 5; 
let questionOn = 1;
let previousQuestion = 0;
let score = 0;

//empty array to push new questions when created
let testQuestions = [];
let shownQuestions = [];
let allResults = [];
let testN = 0;
let possibleQuestions = ["diff-01", "diff-02", "int-01", "int-02", "surd-01"];
let correctAnswers = [31, -2, 0.5, 4, 2, 4, "c", 2, -2, 3, 3, 2];
let diff01a = [31];
let diff02a = [-2, 0.5, 4];
let int01a = [2, 4, "c"];
let int02a = [2, -2, 3];
let surd01a = [3, 2];
let answers = [];

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
  testN = JSON.parse(localStorage.getItem("testNumber"))
    while(questionAnswer.firstChild){
        questionAnswer.removeChild(questionAnswer.firstChild)
    }

    let questionH = document.createElement("h2");
    questionH.textContent = `Question ${questionOn}:`
    questionAnswer.appendChild(questionH)

    let q1 = randomNum();
    question.src = testQuestions[q1].src;
    question.alt = testQuestions[q1].name;
    
    console.log(testQuestions[q1].name)

    //Avoid repetition
    while (shownQuestions.includes(q1)){
        q1 = randomNum();
    }

    shownQuestions.push(q1);
    console.log(shownQuestions)

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

    let button1 = document.createElement("BUTTON");
    let next = document.createTextNode("Next");
    button1.appendChild(next)
    questionAnswer.appendChild(button1)
    let button2 = document.createElement("BUTTON");
    let finish = document.createTextNode("Finish");
    button2.appendChild(finish)
    questionAnswer.appendChild(button2)

    if (questionOn == maxQuestions){
        questionAnswer.removeChild(button1)
    } else if (questionOn < maxQuestions){
        questionAnswer.removeChild(button2)
    }
    else{
        questionAnswer.removeChild(button1)
        questionAnswer.removeChild(button2)
    }
    previousQuestion = questionOn -1
    questionOn ++;

    button1.onclick = function() {nextB()};
    button2.onclick = function() {finishB()};
}
renderFillQ();

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
    let input1 = document.createElement("INPUT")
    let label1 = document.createElement("LABEL")
    label1.innerHTML = "x<sup>4</sup> +"
    let input2 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.textContent = "x + "
    let input3 = document.createElement("INPUT")
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    input3.setAttribute("type", "text")
    fieldset.appendChild(legend)
    fieldset.appendChild(input1)
    fieldset.appendChild(label1)
    fieldset.appendChild(input2)
    fieldset.appendChild(label2)
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
    let input1 = document.createElement("INPUT")
    let label1 = document.createElement("LABEL")
    label1.innerHTML = "x<sup>6</sup> +"
    let input2 = document.createElement("INPUT")
    let label2 = document.createElement("LABEL")
    label2.innerHTML = "x<sup>4</sup> +"
    let input3 = document.createElement("INPUT")
    let label3 = document.createElement("LABEL")
    label3.textContent = "x + c"
    input1.setAttribute("type", "number")
    input2.setAttribute("type", "number")
    input3.setAttribute("type", "text")
    fieldset.appendChild(legend)
    fieldset.appendChild(input1)
    fieldset.appendChild(label1)
    fieldset.appendChild(input2)
    fieldset.appendChild(label2)
    fieldset.appendChild(input3)
    fieldset.appendChild(label3)
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

//Function for the next question
function nextB(){
    retrieve();
    console.log("Next question please!")
    renderFillQ();
}
//Function for results page
function finishB(){
    console.log("You finished the test, YAY!")
    results()
}

// Function to retrieve the user input
function retrieve(){
    let userAnswer = questionAnswer.getElementsByTagName("INPUT")
    let index = shownQuestions[previousQuestion];
    let compare = testQuestions[index].name
    console.log(compare)
    if (compare == "diff-01"){
        console.log("This is the first differential Q!")
        for (let i = 0; i < userAnswer.length; i++){
          console.log(`The answer is ${diff01a[i]} and the user input was ${userAnswer[i].value}`)
          if (diff01a[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
          } else{
            answers.push("incorrect")
          }
          console.log(answers[i])
        }
      }
      else if (compare == "diff-02"){
        console.log("This is the second differential Q!")
        for (let i = 0; i < userAnswer.length; i++){
          if (diff02a[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
          } else{
            answers.push("incorrect")
          }
          console.log(answers[i])
        }
      }
      else if (compare == "int-01"){
        console.log("This is the first integration Q!")
        for (let i = 0; i < userAnswer.length; i++){
          if (int01a[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
        } else{
            answers.push("incorrect")
        }
        console.log(answers[i])
        }
      }
      else if (compare == "int-02"){
        console.log("This is the second integration Q!")
        for (let i = 0; i < userAnswer.length; i++){
          if (int02a[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
        } else{
            answers.push("incorrect")
        }
        console.log(answers[i])
        }
      }
      else if (compare == "surd-01"){
        console.log("This is the first surds Q!")
        for (let i = 0; i < userAnswer.length; i++){
          if (surd01a[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
        } else{
            answers.push("incorrect")
        }
        console.log(answers[i])
        }
      }
            
            console.log("The score is " + score)
}
    
function results(){
  //Remove content
  questionAnswer.remove()
  question.remove()

  let message = document.createElement("h2")
  message.textContent = "Here are your Results!"
  questionArea.appendChild(message)

  let stat = Math.round((score/correctAnswers.length)*100);
  let result = document.createElement("p")
  result.textContent = `You scored ${score} out of ${correctAnswers.length}, which is ${stat}%.`
  questionArea.appendChild(result)

  let chart = document.createElement("canvas");
  chart.id = "MyChart"
  questionArea.appendChild(chart)

  let right = score;
  let wrong = correctAnswers.length - score;

  const data = {
    labels: [
      'Correct',
      'Incorrect',
    ],
    datasets: [{
      label: 'Results',
      data: [right, wrong],
      backgroundColor: [
        'green',
        'red',
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'doughnut',
    data: data,
  };
  
  const resultsChart = document.getElementById("MyChart");
  let myChart = new Chart(resultsChart, config)

  setLocalStorage();
}

function setLocalStorage(){
  console.log(typeof(testN))
  testN++
  localStorage.setItem("testNumber", JSON.stringify(testN));
  localStorage.setItem(`Results ${testN}`, JSON.stringify(score));
  console.log("Score stored")
  console.log(testN)
}
