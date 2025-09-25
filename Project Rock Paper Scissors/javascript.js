
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
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

function playSelection(selection) {
    const computerSelection = getComputerChoice();
    const result = playRound(selection, computerSelection);
    const score = document.getElementById("result");
    score.textContent = `${result} | Score: You = ${humanScore}, Bot = ${computerScore}`;
    score.style.fontSize = "24px";
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        const selection = button.textContent.toLowerCase();
        playSelection(selection);
    });
});
