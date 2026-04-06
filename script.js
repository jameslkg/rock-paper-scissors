let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }else if(choice == 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if((humanChoice === "ROCK" && computerChoice === "PAPER")
    ||(humanChoice === "PAPER" && computerChoice === "SCISSORS")
    ||(humanChoice === "SCISSORS" && computerChoice === "ROCK")){
        computerScore++;
        return "You lose! "+computerChoice+ " beats " +humanChoice;
    }else if(humanChoice === computerChoice){
        return "Tie!";
    }else{
        humanScore++;
        return "You Win! "+humanChoice+ " beats " +computerChoice;
    }
}


function playGame(rounds){
    for(let i=0; i<rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if(humanScore > computerScore){
        console.log("You Win! "+humanScore+" vs "+computerScore);
    } else if(humanScore < computerScore){
        console.log("You Lose! "+humanScore+" vs "+computerScore);
    } else{
        console.log("It's a tie! "+humanScore+" vs "+computerScore);
    }
    
}

playGame(4);
