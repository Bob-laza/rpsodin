const rockButton = document.getElementById("btn1");
const paperButton = document.getElementById("btn2");
const scissorsButton = document.getElementById("btn3");
let score = 0;
rockButton.addEventListener("click", () => {
    playGame(1);
});

paperButton.addEventListener("click", () => {
    playGame(2);
});

scissorsButton.addEventListener("click", () => {
    playGame(3);
});

function playGame(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    let didPLayerWon = false;


    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
        didPLayerWon = 3;
    } else if (userChoice === 1 && computerChoice === 3 || userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2) {
        result = "You win!";
        didPLayerWon = true;
        score++;
    } else {
        result = "Computer wins!";
        didPLayerWon = false;
    }

    const resultDiv = document.getElementById("result");
    const scoreresult = document.getElementById("score");

    if(didPLayerWon === true){
        resultDiv.innerHTML = `<div id="result">You chose <span style="color: #9DF519">${getChoiceString(userChoice)}.</span> Computer chose <span style="color: #F14A8D">${getChoiceString(computerChoice)}.</span> ${result}🎆</div>`;
        scoreresult.innerHTML = `<div id ="score">score: ${score}</div>`
    }else if(didPLayerWon === false){
        resultDiv.innerHTML = `<div id="result">You chose <span style="color: #F14A8D">${getChoiceString(userChoice)}.</span> Computer chose <span style="color: #9DF519"">${getChoiceString(computerChoice)}.</span> ${result}</div>`;
    }else{
        resultDiv.innerHTML = `<div id="result">You chose <span style="color: #F14A8D">${getChoiceString(userChoice)}.</span> Computer chose <span style="color: #9DF519"">${getChoiceString(computerChoice)}.</span> ${result}</div>`;

    }
   console.log(score)
}

function getChoiceString(choice) {
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}