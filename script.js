


/*Function named  getComputerChoise has to randomly return one of three values: rock, paper, or scissors.
use math.random to gert this randomness
    
 getHumanChoise is a function that return one of valid choises depending on user input.
test with console.log the returns

declare player score variables, like humanScore and computerScore. initialize those with a value of 0

write logic for single round; create function playRound. this will take humanChoise and computerChoise as
parameters to take their choices as arguments.  the playRound function should display also a 
phrase saying who won the round, and increment the different scores depending who winned the round

write logic to play the entire game, considering that the maximum of rounds shjould be of 5 rounds.
this funciton would be called playGame, and it will call the function playRound to play 5 round
*/












//SOME EXTERNAL VARIABLES THAT WE WILL KEEP USING THROGHOUT THE FUNCTIONS
let computerChoise
let humanChoise
let humanScore = 0
let computerScore = 0
let gameEnded = false
let results = ""



// THIS GETS THE TEXT OF THE BUTTON PRESSED, ASSIGNING THE humanChoise, AND ACTUALLY STARTS THE WHOLE GAME WITH THE FUNCTION playRound 
const btnArray = document.querySelector(`div`);
btnArray.addEventListener(`click`, (event) => {
    let target = event.target;
    humanChoise = target.innerText;
    playRound();
})











//                                                    ALL THE FUNCTIONS ARE BELOW

//RANDOM FUNCTION FOR THE COMPUTER CHOISE:
function getComputerChoise() {
    computerChoise = Math.floor(Math.random() * 3);
    if (computerChoise === 0) {
        computerChoise = "rock"
    } else if (computerChoise === 1) {
        computerChoise = "paper"
    } else {
        computerChoise = "scissors"
    }
}
//FUNCTION FOR CALCULATING WHO SIGNED SCORE
function addScore() {
    choiceDiv.textContent = (`The computer has choose: ${computerChoise}`)
    console.log(`The computer has choose: ${computerChoise}`);  
    if ((humanChoise === "rock") && (computerChoise === "scissors")) {
        humanScore += 1;
    } else if ((humanChoise == "paper") && (computerChoise === "rock")) {
        humanScore += 1;
    } else if ((humanChoise == "scissors") && (computerChoise === "paper")) {
        humanScore += 1;
    } else if (humanChoise === computerChoise) {
    console.log("draw");
    } else {
        computerScore += 1;
    } console.log(humanScore, computerScore);
    scoreDiv.textContent = (humanScore + " " + computerScore);


}
//THE FUNCTION THAT GATHERS ALL THE OTHERS, AND KEEP BEING USABLE IF gameEnded IS FALSE
function playRound() {
    if (gameEnded === false) {
        getComputerChoise();
        addScore();
        gameOver(); 
    } else {
        console.log("Game is ended, reload the page")
    }
}
//THIS ENDS THE GAME ONLY WHEN ONE OF THE PLAYERS GET TO 5 POINTS. IT ALSO CHANGES THE gameEnded VARIABLE TO TRUE, SO PLAYROUND CAN STOP
function gameOver() {
    
    if (humanScore === 5) {
        results = "Human wins"
        gameEnded = true
        console.log (results)
    } else if (computerScore === 5) {
        results = "Computer wins"
        gameEnded = true
        console.log (results)
    } 
    nuovoDiv.textContent = results;
}


const scoreDiv = document.createElement(`div`);
const choiceDiv = document.createElement(`div`)
const nuovoDiv = document.createElement(`div`);
const genitore = document.querySelector(`body`);
genitore.append(choiceDiv);
genitore.append(scoreDiv);
genitore.append(nuovoDiv);
    





 