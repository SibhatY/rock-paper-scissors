
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
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {

        humanScore += 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

    } else {
        console.log("It's a Tie!");
    }



    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);

    rounds += 1;

    updateGame();


}




function updateGame() {

    if (humanScore >= 5 || computerScore >= 5) {

        if (humanScore > computerScore) {
            console.log("YOU WIN THE GAME!!!");
        }
        else {
            console.log("AWW, YOU LOST THE GAME!");
        }
    }
}








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





