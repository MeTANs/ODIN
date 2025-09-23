
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors: ").toLowerCase();
    return input
}

function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice === computerChoice) {
        winner = "Draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        winner = "You win!";
    } else {
        computerScore++;
        winner = "You lost!";
    }
    return winner;
}

function playGame(number){

    for (let i = 0; number >= i; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score:\ You = ${humanScore}\ Bot = ${computerScore}`)
    }
}

let gameInputRound = prompt("Enter the number of matches you want to play:");
let number = Number(gameInputRound);
playGame(number);

