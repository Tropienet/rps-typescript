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

console.log(getComputerChoice());