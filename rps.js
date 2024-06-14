
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors"
    }

}


function getHumanChoice() {

    let userChoice;

    while (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {

        userChoice = (prompt("Enter 'r' for Rock, 'p' for Paper or 's' for Scissors"));

    }
    

    switch (userChoice) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }


}




function playRound(computerChoice, humanChoice) {


    if ((humanChoice === "Rock") && (computerChoice === "Paper")) {

        computerScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Lose! Paper beats Rock");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
        
    }
    else if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {

        humanScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Win! Rock beats Scissors");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Rock") && (computerChoice === "Rock")) {

        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("Tie! Rock vs Rock");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {

        humanScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Win! Paper beats Rock");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Paper") && (computerChoice === "Scissors")) {

        computerScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Lose! Scissors beats Paper");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
        
    }
    else if ((humanChoice === "Paper") && (computerChoice === "Paper")) {

        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("Tie! Paper vs Paper");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Scissors") && (computerChoice === "Rock")) {

        computerScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Lose! Rock beats Scissors");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {

        humanScore += 1;
        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("You Win! Scissors beats Paper");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }
    else if ((humanChoice === "Scissors") && (computerChoice === "Scissors")) {

        console.log("Computer said" + " " + computerChoice);
        console.log("User said" + " " + humanChoice);
        console.log("Tie! Scissors vs Scissors");
        console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);

    }


}







const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(computerSelection, humanSelection);
