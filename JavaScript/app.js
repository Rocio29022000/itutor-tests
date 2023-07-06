// Function to retrieve the user input
function retrieve(){
    let userAnswer = questionAnswer.getElementsByTagName("INPUT")
    let index = shownQuestions[previousQuestion];
    let compare = testQuestions[index].name
    console.log(compare)
    if (compare == "diff-01"){
        console.log("This is the first differential Q!")
        for (let i = 0; i < 1; i++){
          console.log(`The answer is ${correctAnswers[i]} and the user input was ${userAnswer[i].value}`)
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
        for (let i = 1; i < 4; i++){
          if (correctAnswers[i] == userAnswer[i].value){
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
        for (let i = 4; i < 7; i++){
          if (correctAnswers[i] == userAnswer[i].value){
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
        for (let i = 7; i < 10; i++){
          if (correctAnswers[i] == userAnswer[i].value){
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
        for (let i = 10; i < userAnswer.length; i++){
          if (correctAnswers[i] == userAnswer[i].value){
            answers.push("correct")
            score ++
        } else{
            answers.push("incorrect")
        }
        console.log(answers[i])
        }
      }
            // console.log(userAnswer[i].value)
            
            console.log("The score is " + score)
}
    
  