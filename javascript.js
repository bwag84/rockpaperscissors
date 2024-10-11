//This function sets computer choice, randomly selecting a number between 1 and 3

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() *3 +1) //selects a random number betweeen 1 and 3. If you do not add the +1 it also includes 0

    if (randomNumber ===1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}

function getHumanChoice() {
    let userInput; 
    const validChoices = ["rock", "paper", "scissors"];

    while (true){
        userInput = prompt ("Please write Rock, paper or scissors").toLowerCase();
        
        if (validChoices.includes(userInput)){
            return userInput; //returns the valid input
        } else {
            alert ("try again, idiot");
        }

    }

}



getHumanChoice();


// Testing results in the browser console
console.log(getComputerChoice())
console.log(getHumanChoice())