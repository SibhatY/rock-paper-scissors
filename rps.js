
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


    let gameMessage;

    if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {

        computerScore += 1;

        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

        gameMessage = `You Lose! ${computerChoice} beats ${humanChoice}`;


    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {

        humanScore += 1;

        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

        gameMessage = `You Win! ${humanChoice} beats ${computerChoice}`;

    } else {
        console.log("It's a Tie!");
        gameMessage = "It's a Tie!";
    }



    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);

    rounds += 1;

    updateDOM(gameMessage);

    updateGame();




}


function updateDOM(message) {

    const score = document.querySelector("#score");
    const roundInfo = document.querySelector("#roundInfo");

    score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    roundInfo.textContent = `Round ${rounds}: ${message}`;

}




function updateGame() {
    
    const status = document.querySelector("#status");


    if (humanScore >= 5 || computerScore >= 5) {

        if (humanScore > computerScore) {
            console.log("YOU WIN THE GAME!!!");
            status.textContent = "GAME OVER! YOU WIN!";
        }
        else {
            console.log("AWW, YOU LOST THE GAME!");
            status.textContent = "GAME OVER! YOU LOSE!";
        }
        disableGame();

    }
    else {
        status.textContent = `Choose your move!`;
    }
}


function disableGame() {

    const buttons = document.querySelectorAll("#rockButton, #paperButton, #scissorButton");

    buttons.forEach(button => {
        button.disabled = true;
    });

    document.querySelector("#replayButton").style.display = `block`;

    document.querySelector("#replayButton").onclick = resetGame;


    
}


function resetGame () {

    computerScore = 0;
    humanScore = 0;
    rounds = 0;

    const buttons = document.querySelectorAll("#rockButton, #paperButton, #scissorButton");

    buttons.forEach(button => {
        button.disabled = false;
    });

    document.querySelector("#score").textContent = "Your Score: 0 | Computer Score: 0";
    document.querySelector("#roundInfo").textContent = "";
    document.querySelector("#status").textContent = "Welcome to Rock-Paper-Scissors, Choose your move!";
    document.querySelector("#replayButton").style.display = 'none';

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





