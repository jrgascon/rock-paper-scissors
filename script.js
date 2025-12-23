const btnpaper = document.querySelector("#paper") 
const btnscissors = document.querySelector("#scissors")
const btnrock = document.querySelector("#rock")
const humanScoreInput = document.querySelector("#human-score");
const computerScoreInput = document.querySelector('#computer-score');

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
    
    if (humanChoice == "scissors"){
        return 1;
    } else if(humanChoice == "paper"){
        return 2;
    } else if (humanChoice == "rock"){
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
    let computerScore = 0;
    let humanScore = 0;

    btnpaper.addEventListener("click", (event) => {
        
        event.preventDefault();
        choice = "paper";
        
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(choice);
        
        if (gameLogic(humanChoice, computerChoice) == "draw") {
            alert("draw, try again")
        }else if (gameLogic(humanChoice, computerChoice) == "win, try again") {
            humanScore += 1;
            humanScoreInput.textContent = humanScore;
            alert("Win, try again");
        }else{ 
            computerScore += 1;
            computerScoreInput.textContent = computerScore;
            alert("lose, try again");
         }
        
    })

    btnscissors.addEventListener("click", (event) => {
        
        event.preventDefault();
        choice = "scissors";
        
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(choice);
        
        if (gameLogic(humanChoice, computerChoice) == "draw") {
            alert("draw, try again")
        }else if (gameLogic(humanChoice, computerChoice) == "win, try again") {
            humanScore += 1;
            humanScoreInput.textContent = humanScore;
            alert("Win, try again");
        }else{ 
            computerScore += 1;
            computerScoreInput.textContent = computerScore;
            alert("lose, try again");
         }
        
    })

    btnrock.addEventListener("click", (event) => {
        
        event.preventDefault();
        choice = "rock";
        
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(choice);
        
        if (gameLogic(humanChoice, computerChoice) == "draw") {
            alert("draw, try again")
        }else if (gameLogic(humanChoice, computerChoice) == "win, try again") {
            humanScore += 1;
            humanScoreInput.textContent = humanScore;
            alert("Win, try again");
        }else{ 
            computerScore += 1;
            computerScoreInput.textContent = computerScore;
            alert("lose, try again");
         }
        
    })

}