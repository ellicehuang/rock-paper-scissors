function getComputerChoice() {
    let rock = Math.random();
    let paper = Math.random();
    let scissors = Math.random();

    let result = Math.min(rock, paper, scissors);

    if (result == rock) { return "rock" }
    else if (result == paper) {return "paper" }
    else {return "scissors"};
}

function getHumanChoice() {
    let response = window.prompt("Rock, paper, or scissors?");
    return response
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = String(humanChoice).toLowerCase();
    
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        } else { 
            console.log("It's a tie!");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`Congratulations, you scored ${humanScore} points and won!`)
    } else {console.log(`You scored ${humanScore} points and lost. Try again!`)}
}

playGame()