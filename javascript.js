
function getComputerChoice() {
    let rock = Math.random();
    let paper = Math.random();
    let scissors = Math.random();

    let result = Math.min(rock, paper, scissors);

    if (result == rock) { return "rock" }
    else if (result == paper) {return "paper" }
    else {return "scissors"};
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const message = document.querySelector('div.announcer');
    let winner;

    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        winner = 'human'
        message.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You get a point!`
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You get a point!`)
    } else if (
        (computerChoice == 'rock' && humanChoice == 'scissors') ||
        (computerChoice == 'paper' && humanChoice == 'rock') ||
        (computerChoice == 'scissors' && humanChoice == 'paper')
    ) {
        winner = 'computer'
        message.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. Computer gets a point!`
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. Computer gets a point!`)
    } else {
        message.textContent = `You both chose ${humanChoice}! This round is a tie.`
        console.log(`You both chose ${humanChoice}! This round is a tie.`);
        winner = 'tie'
    }

    return winner
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const message = document.querySelector('div.announcer');
    const computerScoreDiv = document.querySelector('div.computer-score');
    const humanScoreDiv = document.querySelector('div.human-score');


    function checkScores(winner) {
        if (winner == 'human') humanScore++;
        if (winner == 'computer') computerScore++;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
        console.log(`scores: ${humanScore} - ${computerScore}`)

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == 5) {
                message.textContent = 'You win the game!'
                console.log('You win the game!')
            } else if (computerScore == 5) {
                message.textContent = 'You lost the game. Try again!'
                console.log('You lost the game. Try again!')
            }
            humanScore = 0;
            computerScore = 0;
        }
        
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanChoice = button.className;
            winner = playRound(humanChoice);
            checkScores(winner);
        })
    });
}

playGame();