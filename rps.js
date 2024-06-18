
let computerScore = 0;
let humanScore = 0;
let rounds = 0;

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






function playRound(computerChoice, humanChoice) {

    console.log(`Round ${rounds + 1}:`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(`You chose ${humanChoice}`);



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














// function playGame() {

//     computerScore = 0;
//     humanScore = 0;

//     for (let i = 0; i < 5; i++) {

//         console.log(`Round ${i + 1}:`);

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(computerSelection, humanSelection);
//         console.log("\n");

//     }

//     if (humanScore > computerScore) {
//         console.log("YOU WIN THE GAME!!!");
//     }
//     else if (humanScore < computerScore) {
//         console.log("AWW, YOU LOST THE GAME!");
//     }
//     else {
//         console.log("TIE GAME!!")
//     }

// }


const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

const scissorButton = document.querySelector("#scissorButton");
scissorButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});





