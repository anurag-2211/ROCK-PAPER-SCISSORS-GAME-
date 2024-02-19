let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const s1 = document.querySelector("#your-choice");
const s2 = document.querySelector("#com-choice");
const scorePara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw!! Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    scorePara.innerText = userScore;
    msg.innerText = "You Win & Computer lose!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPara.innerText = compScore;
    msg.innerText = "You Lose & Computer Wins!";
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  s1.innerText = userChoice;
  const compChoice = genCompChoice();
  s2.innerText = compChoice;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
