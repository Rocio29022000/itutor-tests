"use strict"

const questionName = document.getElementById("question-area");

//FOR NOW: Construct Fill in questions
function Fill(questionsNum, questionName, qMin, qMax) {
    this.questionsNum = questionsNum;
    this.questionName = questionName;
    this.qMin = qMin;
    this.qMax = qMax;
    this.render();
  }
