console.log("WELCOME! TO THE GAME OF ROCK PAPER AND SCISSOR....");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.random();
    if(num>=0 && num<0.4) return "rock";
    else if(num>=0.4 && num<0.7) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice = prompt("Choose one Rock/Paper/Scissor :");
    return choice;
}
// function to play only one round
function playRound(humanChoice,computerChoice){
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissor"){
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice === "scissor" && computerChoice === "rock"){
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice} `);
        computerScore++;
    }
    else if(humanChoice===computerChoice){
        console.log(`It's a tie!! ${humanChoice} and ${computerChoice}`);
    }
    else{
        console.log(`You Won !! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    console.log(`Your Score : ${humanScore} , Computer Score : ${computerScore}`);
}

// function to play game, 5 rounds
function playGame(){
    for(let i=1;i<=5;i++){
        console.log(`Round ${i} :`);
        playRound();
    }

    if(humanScore>computerScore) console.log("YOU WON THE GAME !!");
    else if(humanScore>computerScore) console.log("YOU LOSE THE GAME !!");
    else  console.log("THE GAME WAS A TIE!!");
}

playGame();