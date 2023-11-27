// this can be done better with an array and array.length 
let playerScore = 0;
let cpuScore = 0;

const btns = document.querySelectorAll(".game");
const result = document.querySelector(".result");
const final = document.querySelector(".gameOver");
const reset = document.querySelector(".reset");

function getComputerChoice() {
    const choice_num = Math.floor(Math.random() * 3);
    switch (choice_num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    const player_choice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (player_choice === "Rock") {
        if (computerSelection === "Rock") {
            result.style.color = '#333333';
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Paper") {
            cpuScore++;
            result.setAttribute('style', 'color: #e74c3c;');
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            playerScore++;
            result.style.color = '#2ecc71';
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
    else if (player_choice === "Paper") {
        if (computerSelection === "Paper") {
            result.style.color = '#333333';
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Scissor") {
            cpuScore++;
            result.setAttribute('style', 'color: #e74c3c;');
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            playerScore++;
            result.style.color = '#2ecc71';
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
    if (player_choice === "Scissor") {
        if (computerSelection === "Scissor") {
            result.style.color = '#333333';
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Rock") {
            cpuScore++;
            result.setAttribute('style', 'color: #e74c3c;');
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            playerScore++;
            result.style.color = '#2ecc71';
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
}

function gameOver() {
     if (playerScore > cpuScore) {
         endGame();
         final.style.color = '#2ecc71';
         return(`Player wins! \n${playerScore} vs ${cpuScore}`);
     }
     else if (cpuScore > playerScore) {
         endGame();
         final.style.color = '#e74c3c';
         return(`Computer wins! \n${playerScore} vs ${cpuScore}`);
     }

 }

 function endGame() {
    btns.forEach((btn) => {
        btn.disabled = true;
    })
    reset.disabled = false;
    reset.style.cursor = 'pointer';
    reset.addEventListener('click', resetGame)
 }

 function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    result.textContent = '';
    final.textContent = '';

    btns.forEach((btn) => {
        btn.disabled = false;
    })
    reset.style.cursor = 'auto';
    reset.disabled = true;

 }


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (playerScore < 5 && cpuScore < 5) {
            console.log(btn.id);
            result.textContent = playRound(btn.id, getComputerChoice());
        }
        else {
            final.textContent = gameOver()
        }
    })
} )