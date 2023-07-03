"use strict"
console.log("Hi!")


//empty array to push new questions when created
const questions = [];

//Random number to select what question is shown
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Constructor function to create new Question
// with each question I want to create a question area and an answer area.

function MCQ(questionsNum, questionName, qMin, qMax) {
    this.questionsNum = questionsNum;
    this.questionName = questionName;
    this.qMin = qMin;
    this.qMax = qMax;
    this.render();
  }


  