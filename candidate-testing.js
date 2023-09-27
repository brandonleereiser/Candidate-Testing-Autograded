const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 

let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("What is your name?")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < questions.length; i++) {
      candidateAnswer = input.question(questions[i]); // Ask the question and get the candidate's response
      candidateAnswers.push(candidateAnswer); // Store the response in the candidateAnswers array
    }
  

}

function gradeQuiz(candidateAnswers) {


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let percentageCorrect = 0;
  for (let J = 0; J < candidateAnswers.length; J++) {
    console.log(`${J + 1}) ${questions[J]}`)
    console.log(`My answer is ${candidateAnswers[J]}`); 
    console.log(`The correct answer is ${correctAnswers[J]}\n`); 
    if (candidateAnswers[J].toLowerCase() === correctAnswers[J].toLowerCase()){
      percentageCorrect = percentageCorrect + 1; 
    }
  }
  console.log(`Students graded percent is ${(percentageCorrect / candidateAnswers.length * 100)}`)
  if ((percentageCorrect / candidateAnswers.length * 100) < 60){
    console.log("Status failed")
  }
  return (percentageCorrect / candidateAnswers.length * 100);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};