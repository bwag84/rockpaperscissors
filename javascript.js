//This function sets computer choice, randomly selecting a number between 1 and 3

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() *3 +1)

    if (randomNumber ===1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}


console.log(getComputerChoice())