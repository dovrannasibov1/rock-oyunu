// ********* CONSTANT & GLOBAL VARIABLES ********* //
let scoreDiv = document.getElementById("score-div");
let playCards = document.querySelectorAll(
  ".original-game .body .game-component"
);

const Is_USER_WINNING = {
  "paper-rock": "win",
  "paper-scissors": "lose",
  "rock-paper": "lose",
  "rock-scissors": "win",
  "scissors-paper": "win",
  "scissors-rock": "lose",
  "scissors-scissors": "draw",
  "rock-rock": "draw",
  "paper-paper": "draw",
};
const ORIGINAL_ACTIONS = ["scissors", "paper", "rock"];
let score = 0;
// ********* EVENT LISTENERS ********* //

// ********* VIEW FUNCTIONS ********* //
function toggleRules(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function playAgain() {
  playCards.forEach((card) => {
    card.classList.toggle("hidden");
  });
}

// ********* LOGIC FUNCTIONS ********* //
function runOriginalGame(action) {
  let resultSpan = document.querySelector(
    ".original-game .body .result-card  .result-detail span"
  );
  let userComp = document.querySelector(
    ".original-game .body .result-card .user-comp"
  );
  let houseComp = document.querySelector(
    ".original-game .body .result-card .house-comp"
  );
  let userActionEl = document.querySelector(
    ".original-game .body .result-card .user-comp .action-component"
  );
  let houseActionEl = document.querySelector(
    ".original-game .body .result-card .house-comp .action-component"
  );
  let userImgEl = document.querySelector(
    ".original-game .body .result-card .user-comp .action-component img"
  );
  let houseIimgEl = document.querySelector(
    ".original-game .body .result-card .house-comp .action-component img"
  );
  let userAction = action;
  // Randomly choose an action
  let randomIndex = Math.floor(Math.random() * ORIGINAL_ACTIONS.length);
  let randomAction = ORIGINAL_ACTIONS[randomIndex];
  let result = Is_USER_WINNING[userAction + "-" + randomAction];

  // Hide the playground and display the result-card
  playCards.forEach((card) => {
    card.classList.toggle("hidden");
  });
  console.log(userAction);
  console.log(randomAction);

  // Display winner details
  userActionEl.setAttribute("class", "action-component");
  houseActionEl.setAttribute("class", "action-component");
  userActionEl.classList.add(userAction);
  houseActionEl.classList.add(randomAction);
  userImgEl.setAttribute("src", `images/icon-${userAction}.svg`);
  houseIimgEl.setAttribute("src", `images/icon-${randomAction}.svg`);
  // Display user action

  if (result === "win") {
    // The User wins
    userComp.classList.add("winner");
    houseComp.classList.remove("winner");
    resultSpan.innerHTML = "you win";
    score++;
  } else if (result === "lose") {
    // The Computer wins
    userComp.classList.remove("winner");
    houseComp.classList.add("winner");
    resultSpan.innerHTML = "you lose";
    score--;
  } else {
    // It's a draw
    userComp.classList.add("winner");
    houseComp.classList.add("winner");
    resultSpan.innerHTML = "draw";
  }
  // Update the score
  scoreDiv.innerHTML = score;
}
