//global scope variables

let humanScore = 0;
let computerScore = 0;



//This function sets computer choice, randomly selecting a number between 1 and 3

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() *3 +1) //selects a random number betweeen 1 and 3. If you do not add the +1 it also includes 0

    if (randomNumber ===1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let userInput; 
    const validChoices = ["rock", "paper", "scissors"]; //an array with the correct answers, lowerCase for validating

    while (true){
        userInput = prompt ("Please write rock, paper or scissors").toLowerCase(); //converts the prompt to lowerCase which makes validating easier
        
        if (validChoices.includes(userInput)){
            return userInput; //returns the valid input
        } else {
            alert ("try again, idiot");
        }

    }

}


const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){ //the naming of the arguments is arbitrary. It could be a, b. But this is readable
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You Win");
        }
        else if ((computerChoice === "rock" && humanChoice === "scissors") ||
                (computerChoice === "paper" && humanChoice === "rock") ||
                (computerChoice === "scissors" && humanChoice === "paper")) {
                    computerScore++;
                    console.log("You looose");
                }
        else{
            console.log("It is a draw, try again")
        }

        console.log("Score: " +  "Humans " + humanScore, "Computer "+ computerScore)
        

}

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("You Win!");
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
               (computerChoice === "paper" && humanChoice === "rock") ||
               (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        console.log("You Lose!");
    } else {
        console.log("It's a draw!");
    }

    console.log("Score: Humans " + humanScore + ", Computer " + computerScore);
}

// Function to play the game (best of 5 rounds)
function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        console.log("Round " + (rounds + 1));
        const humanChoice = getHumanChoice(); // Get human choice for each round
        const computerChoice = getComputerChoice(); // Get computer choice for each round
        playRound(humanChoice, computerChoice); // Play the round with the chosen values
    }

    console.log("Final Score: Humans " + humanScore + ", Computer " + computerScore);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game. Better luck next time.");
    } else {
        console.log("It's a tie overall!");
    }
}


playGame();

// Testing results in the browser console
console.log("the computer chose " + computerSelection)



//console.log("the human chose " + getHumanChoice)