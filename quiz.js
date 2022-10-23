const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output");

const correctAnswer = [
  "90°",
  "right angled",
  "Angle that measure less than 90",
  "Angle that measure more than 90",
  "angle between 180 & 360",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = `Your score is  ${score}`;
}

submitAnswerBtn.addEventListener("click", calculateScore);
