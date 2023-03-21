function getComputerChoice() {
    let num = Math.random();

    if(num<0.33) {
        return "rock";
    }else if (num<0.66) {
        return "scissors"
    }else {
        return "paper"
    }

    return "error"
}

function playRound(computerChoice: string, playerChoice: string) {
    const pWinMSG = "Player wins";
    const cWinMSG = "Computer wins"

    if(computerChoice===playerChoice) {
        return "Tie";
    }else if(computerChoice==="rock"){
        if(playerChoice==="paper") {
            return pWinMSG;
        }else {
            return cWinMSG;
        }
    }else if(computerChoice==="paper") {
        if(playerChoice==="scissors") {
            return pWinMSG;
        }else {
            return cWinMSG;
        }
    }else {
        if(playerChoice==="rock"){
            return pWinMSG;
        }else {
            return cWinMSG;
        }
    }
}

console.log(playRound(getComputerChoice(), "rock"));