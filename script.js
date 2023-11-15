// this can be done better with an array and array.length 
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
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Paper") {
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
    else if (player_choice === "Paper") {
        if (computerSelection === "Paper") {
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Scissor") {
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
    if (player_choice === "Scissor") {
        if (computerSelection === "Scissor") {
            return `Tie! ${player_choice} ties with ${computerSelection}`;
        }
        else if (computerSelection === "Rock") {
            return `You lose! ${computerSelection} beats ${player_choice}`;
        }

        else {
            return `You win! ${player_choice} wins over ${computerSelection}`;
        }
    }
}

function game() {
    let player_score = 0;
    let computer_score = 0;
    for(let i = 1; i <= 5; i++) {
        let player = prompt("Chose: Rock, Paper or Scissor.");
        let result = playRound(player, getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            player_score++;
        }
        else if (result.includes("lose")) {
            computer_score++;
        }
    }
    if (player_score > computer_score) {
        console.log(`Player wins! ${player_score} vs ${computer_score}`);
    }
    else if (computer_score > player_score) {
        console.log(`Computer wins and player lose! ${player_score} vs ${computer_score}`);
    }
    else {
        console.log(`Tie! ${player_score} vs ${computer_score}`);
    }
    
}

game();