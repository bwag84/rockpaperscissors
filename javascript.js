// Global scope variables
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const TOTAL_ROUNDS = 5;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    // Don't continue if game is over
    if (currentRound >= TOTAL_ROUNDS) {
        alert("Game is over! Please click Reset to play again.");
        return;
    }

    currentRound++;
    document.getElementById("round").textContent = `Round ${currentRound} of ${TOTAL_ROUNDS}`;
    
    const humanChoice = playerSelection;
    const computerChoice = getComputerChoice();
    
    // Display choices
    document.getElementById("results").textContent = 
        `You chose ${humanChoice}, computer chose ${computerChoice}. `;
    
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        document.getElementById("results").textContent += "You win this round!";
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
               (computerChoice === "paper" && humanChoice === "rock") ||
               (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        document.getElementById("results").textContent += "You lose this round!";
    } else {
        document.getElementById("results").textContent += "This round is a tie!";
    }
    
    document.getElementById("score").textContent = 
        `Human: ${humanScore} Computer: ${computerScore}`;
        
    // Check if this was the last round
    if (currentRound === TOTAL_ROUNDS) {
        endGame();
    }
}

function endGame() {
    let finalResult;
    if (humanScore > computerScore) {
        finalResult = "Game Over! Congratulations! You won the game!";
    } else if (computerScore > humanScore) {
        finalResult = "Game Over! Computer wins the game. Better luck next time!";
    } else {
        finalResult = "Game Over! It's a tie overall!";
    }
    
    document.getElementById("finalScore").textContent = finalResult;
    document.getElementById("round").textContent = "Game Over - Click Reset to play again!";
    
    // Show reset button and hide choice buttons after game ends
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("choices").style.display = "none";
}

function resetGame() {
    // Reset all scores and counters
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    
    // Reset display
    document.getElementById("round").textContent = `Round ${currentRound + 1} of ${TOTAL_ROUNDS}`;
    document.getElementById("score").textContent = "Human: 0 Computer: 0";
    document.getElementById("results").textContent = "Choose rock, paper, or scissors to start!";
    document.getElementById("finalScore").textContent = "";
    
    // Show choices and hide reset button
    document.getElementById("choices").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
}

// Initialize game display
resetGame();