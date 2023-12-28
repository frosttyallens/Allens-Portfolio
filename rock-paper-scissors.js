let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

scoreboard();

function pickComputerMove() {
  const rand = Math.random();
  let computerMove = "";

  if (rand >= 0 && rand <= 1 / 3) {
    computerMove = "rock";
  } else if (rand >= 1 / 3 && rand < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function pickResult(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove !== "reset") {
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = `Tie.`;
      } else if (computerMove === "paper") {
        result = `You lost!`;
      } else {
        result = `You won!`;
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = `You lost!`;
      } else if (computerMove === "paper") {
        result = `You won!`;
      } else {
        result = `Tie.`;
      }
    } else {
      if (computerMove === "rock") {
        result = `You won!`;
      } else if (computerMove === "paper") {
        result = `Tie.`;
      } else {
        result = `You lost!`;
      }
    }

    if (result === "Tie.") {
      score.ties++;
    } else if (result === "You won!") {
      score.wins++;
    } else if (result === "You lost!") {
      score.losses++;
    }

    document.querySelector(".js-result").innerHTML = `${result}`;
    document.querySelector(
      ".js-picks"
    ).innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;
    scoreboard();

    localStorage.setItem("score", JSON.stringify(score));
  } else {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector(
      ".js-result"
    ).innerHTML = `You reset the score!`;
    document.querySelector(".js-picks").innerHTML = "";
    scoreboard();
    localStorage.removeItem("score");
  }
}

function scoreboard() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}