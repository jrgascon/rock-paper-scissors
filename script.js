playRounds()

function getOption(number) {

    if (number === 1) {
        return "scissors";
    }
    if(number === 2){
        return "paper";
    }
    if (number === 3) {
        return "rock";
    }

}

function getComputerChoice() {
    
    let number = Math.random() * 10;
    
    if (number < 4) {
        return 1;
    } else if(number > 3 && number < 7){
        return 2;
    } else
        return 3;  

}
    
function getHumanChoice(humanChoice) {
    
    if (humanChoice.toLowerCase() == "scissors"){
        return 1;
    } else if(humanChoice.toLowerCase() == "paper"){
        return 2;
    } else if (humanChoice.toLowerCase() == "rock"){
        return 3;
    }else
        return "error";
        
}
    
function gameLogic(human, computer) {

    if(human == "error")
        return "Introduce un texto valido"

    if (human === computer) {
        return "draw"
    }
    
    if (human === 3 && computer != 1) {
        return "lose, try again";
    }else if (human === 2 && computer != 3){
        return "lose, try again";
    }else if (human === 1 && computer != 2) {
        return "lose, try again"
    }else return "win, try again"

}

function playRounds(){

    let choice
    let rounds = 0
    let computerScore = 0;
    let humanScore = 0;
    
    while (rounds < 5) {

        choice = prompt("Write: Scissors, Paper or Rock    Round:" + (rounds+1));
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(choice)

        if (humanChoice == "error"|| gameLogic(humanChoice, computerChoice) == "draw") {
        }else if (gameLogic(humanChoice, computerChoice) == "win, try again") {
            humanScore += 1;    
        }else{ computerScore += 1 }

        console.log("Computer choice " + getOption(computerChoice) + "  " + computerChoice);
        console.log("Human choice " +getOption(humanChoice) + "  " + humanChoice);
        console.log("Computer Score = " + computerScore)
        console.log("Human Score = " + humanScore)
        alert(gameLogic(humanChoice, computerChoice));
        if(humanChoice != "error") rounds += 1

    }

}