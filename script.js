


/*Function named  getComputerChoise has to randomly return one of three values: rock, paper, or scissors.
use math.random to gert this randomness
    
 getHumanChoise is a function that return one of valid choises depending on user input.
test with console.log the returns

declare player score variables, like humanScore and computerScore. initialize those with a value of 0

write logic for single round; create function playRound. this will take humanChoise and computerChoise as
parameters to take their choices as arguments.  the playRound function should display also a 
phrase saying who won the round, and increment the different scores depending who winned the round

write logic to play the entire game, considering that the maximum of rounds shjould be of 5 rounds.
this funciton would be called playGame, and it will call the function playRound to play 5 rounds
    */



// choises variables
let humanChoise
let computerChoise

// randome computer choise
function getComputerChoise() {
    computerChoise = Math.floor(Math.random() * 3);
    
    if (computerChoise === 0) {
      computerChoise = "rock";
    } else if (computerChoise === 1) {
      computerChoise = "paper";
    } else {
        computerChoise = "scissors";
    }
}

// human choise with a prompt

function getHumanChoise() {
    humanChoise = prompt("Rock, paper or scissors?");
    humanChoise = humanChoise.toLowerCase();
    
   if (humanChoise === "rock") {
        rock = console.log("You choose rock")
    } else if (humanChoise === "paper") {
        paper = console.log("You choose paper");
    } else if (humanChoise === "scissors" || humanChoise === "scissor") {
        scissors = console.log("You choose scissors");    
    } else {
        console.log("Not a valid choise");
    }
}

// make a score variable with an assigned value of 0. function of the game execution, that tracks the increments of scores per player
let humanScore = 0
let computerScore = 0


function playRound() {

    getHumanChoise();
    getComputerChoise();
    console.log(`The computer has choose: ${computerChoise}`);

    if ((humanChoise === "rock") && (computerChoise === "scissors")) {
        humanScore = ++humanScore;
    } else if ((humanChoise === "paper") && (computerChoise === "rock")) {
        humanScore = ++humanScore;
    } else if ((humanChoise === "scissors") && (computerChoise === "paper")) {
        humanScore = ++humanScore;
    } else if (humanChoise === computerChoise) {
       console.log("draw");
    } else {
        computerScore = ++computerScore;
    }
    
    console.log(humanScore, computerScore);
}

/// 5 rounds iteration
for (i=0; i<5; i++) {
    playRound()
}

// game results
if (humanScore > computerScore) {
    console.log("Winner winner, chicken dinner!");
} else if (humanScore === computerScore) {
    console.log("There isn't a winner, how boring...");
} else {
    console.log("The computer has won, glory to the holy machine!");
}

