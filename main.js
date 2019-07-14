let p1Btn = document.querySelector("#p1");
let p2Btn = document.getElementById("p2");
let resetBtn = document.getElementById("reset");
let p1Display = document.getElementById('p1Display');
let p2Display = document.getElementById('p2Display');
let numInput = document.querySelector("input[type=number]");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winngingScore = 5;

p1Btn.addEventListener('click', () => {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winngingScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
  
});

p2Btn.addEventListener('click', () => {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winngingScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
 
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

resetBtn.addEventListener("click", () => {
  reset();
});

numInput.addEventListener('change', () => {
  winningScoreDisplay.textContent = this.value;
  winngingScore = Number(numInput.value);
  reset();
});