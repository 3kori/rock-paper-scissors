function getComputerChoice() {
    let computerPick = (Math.floor(Math.random() * 3));
    
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

function getHumanChoice() {
    let humanPick = (prompt("Pick one: Rock, Paper, Scissors", ""));
    return humanPick.toLowerCase();
}
function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            console.log("It's a tie! Make another pick"); 
        }
        else if(
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper") ||
            (humanChoice == "paper" && computerChoice == "rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        
    }
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
    }
    
    console.log(`Your score: ${humanScore}`);
    console.log(`Opponent: ${computerScore}`);




    if (humanScore === computerScore) {
        console.log(`Dang it! We are equal.`);
    }
    else if (humanScore > computerScore) {
        console.log(`Yes, finally we won!`);
    }
    else {
        console.log(`Noooo! We lost.`);
    }
}




playGame();