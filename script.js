function getComputerChoice() {
    var num = Math.random();
    if (num < 0.33) {
        return "rock";
    }
    else if (num < 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }
    return "error";
}
function playRound(computerChoice, playerChoice) {
    var pWinMSG = "Player wins";
    var cWinMSG = "Computer wins";
    if (computerChoice === playerChoice) {
        return "Tie";
    }
    else if (computerChoice === "rock") {
        if (playerChoice === "paper") {
            return pWinMSG;
        }
        else {
            return cWinMSG;
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            return pWinMSG;
        }
        else {
            return cWinMSG;
        }
    }
    else {
        if (playerChoice === "rock") {
            return pWinMSG;
        }
        else {
            return cWinMSG;
        }
    }
}
function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (var i = 0; i < 5; i += 1) {
        var playerChoice = prompt("Please enter your choice");
        if (playRound(getComputerChoice(), playerChoice === null || playerChoice === void 0 ? void 0 : playerChoice.toLowerCase()) === "Player wins") {
            playerScore += 1;
        }
        else {
            computerScore += 1;
        }
    }
    console.log("Player score is " + playerScore);
    console.log("Computer score is" + computerScore);
}
