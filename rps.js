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




console.log(getComputerChoice());
console.log(getHumanChoice());
