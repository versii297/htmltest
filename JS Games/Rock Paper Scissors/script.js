var userScore = 0;
var computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function convert(letter) {
    if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You Won!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = `${convert(computerChoice)} beats ${convert(userChoice)}. You Lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
    result.innerHTML = "Draw!"
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);   
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }

}


function main() {
rock.addEventListener('click', () => game("r"));

paper.addEventListener('click', () => game("p"));

scissors.addEventListener('click', () => game("s"));
}

main();

