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
        userInput = prompt ("Please write Rock, paper or scissors").toLowerCase(); //converts the prompt to lowerCase which makes validating easier
        
        if (validChoices.includes(userInput)){
            return userInput; //returns the valid input
        } else {
            alert ("try again, idiot");
        }

    }

}


const humanSelection = getHumanChoice(); //does this run the prompt a second time?
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){ //the naming of the arguments is arbitrary. It could be a, b. But this is an effort to be more clear, although it confuses me a little.
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



playRound(humanSelection, computerSelection);




// Testing results in the browser console
console.log("the computer chose " + getComputerChoice())
//console.log("the human chose " + getHumanChoice)