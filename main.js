const btn = document.querySelectorAll('button');
let pick;

let humanScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.value;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        
        document.querySelector('.humanChoice').textContent = `You Chose: ${humanSelection}`;
        document.querySelector('.compChoice').textContent = `Opponent: ${computerSelection}`;


        document.querySelector('.humanScore').textContent = `Your score: ${humanScore}`;
        document.querySelector('.compScore').textContent = `Opponent: ${computerScore}`;

        if(humanScore === 5) {
            document.querySelector('.winnerLoser').textContent = `Yes, finally we won!`;
        }
        if(computerScore === 5) {
            document.querySelector('.winnerLoser').textContent = `Noooo! We lost.`;
        }
        if(humanScore === 5 || computerScore === 5) {
            document.querySelector('.rock').remove();
            document.querySelector('.paper').remove();
            document.querySelector('.scissors').remove();
            document.querySelector('.humanChoice').remove();          
            document.querySelector('.compChoice').remove();
            document.querySelector('.roundVerdict').remove();
            document.querySelector('.humanScore').remove();          
            document.querySelector('.compScore').remove();

            const newGameBtn = document.createElement('button');
            newGameBtn.className = 'newGame';
            newGameBtn.innerHTML = `New Game`;
        
            document.body.appendChild(newGameBtn);

            const newGame = document.querySelector('.newGame');
            newGame.addEventListener('click', () => {
                location.reload();
            });
        }
    });
});

function getComputerChoice() {
    computerPick = (Math.floor(Math.random() * 3));
    
    switch (computerPick) {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        document.querySelector('.roundVerdict').textContent = `It's a tie! Make another pick`; 
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        humanScore++;
        document.querySelector('.roundVerdict').textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        document.querySelector('.roundVerdict').textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
  }