
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


    if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {

        computerScore += 1;
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You chose ${humanChoice}`);
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {

        humanScore += 1;
        console.log(`Computer chose ${computerChoice}`);
        console.log(`You chose ${humanChoice}`);
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

    } else {

        console.log(`Computer chose ${computerChoice}`);
        console.log(`You chose ${humanChoice}`);
        console.log("It's a Tie!");
    }

    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
}




function playGame() {

    computerScore = 0;
    humanScore = 0;

    for (let i = 0; i < 5; i++) {

        console.log(`Round ${i + 1}:`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(computerSelection, humanSelection);
        console.log("\n");

    }

    if (humanScore > computerScore) {
        console.log("YOU WIN THE GAME!!!");
    }
    else if (humanScore < computerScore) {
        console.log("AWW, YOU LOST THE GAME!");
    }
    else {
        console.log("TIE GAME!!")
    }

}




playGame();
