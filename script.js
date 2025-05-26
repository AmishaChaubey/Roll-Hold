// selecting elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.getElementById("score-0");
const score1El = document.getElementById("score-1");
const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");


let scores =[0,0]; //total score
let currentScore = 0;
let playerActive = 0; // 0 = 1st, 1 = 2nd

score0El.textContent=scores[0];
score1El.textContent=scores[1];
current0El.textContent=currentScore;
current1El.textContent=currentScore

btnRoll.addEventListener("click", function () {
  //* 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);

  //* 2. Display dice
  // console.log(diceEl.src);
  diceEl.src = `dice-${dice}.svg`;

  // console.log(diceEl);

  //* 3. Check for rolled 1
  if (dice !== 1) {
    currentScore = currentScore + dice;

    document.getElementById(`current-${playerActive}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current-${playerActive}`).textContent =
      currentScore;
    playerActive = playerActive == 0 ? 1 : 0;

    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");

   
  }
});

btnHold.addEventListener("click",function(){
  // 1.add current score to active player

  scores[playerActive] +=currentScore;
  document.getElementById(`score-${playerActive}`).textContent=
  scores[playerActive]

})
