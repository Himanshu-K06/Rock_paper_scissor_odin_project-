console.log("WELCOME! TO THE GAME OF ROCK PAPER AND SCISSORS....");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.random();
    if(num>=0 && num<0.4) return "Rock";
    else if(num>=0.4 && num<0.7) return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
    let choice = prompt("Choose one Rock/Paper/Scissors :");
    console.log(`user chose ${choice}`);
}
