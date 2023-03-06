
for (i = 0; i <= 5; i++){

const userPromptChoice = prompt('Type rock, paper or scissors');
const computerChoice = Math.floor(Math.random() * 3 + 1); // 1 to 3

function promptToNum(prompt){
    if (prompt === "rock") { return 1 }
    if (prompt === "paper"){return 2}
    if (prompt === "scissors") { return 3 }
}


const userChoiceNum = promptToNum(userPromptChoice.toLowerCase()); //é pra funcionar essa porra

// abaixo os jogos dos numeros, 2 ganha do 1 etc...

function play(){
    if (userChoiceNum == computerChoice){
        return console.log("It's a tie");
    }else if(
        userChoiceNum === 1 && computerChoice == 3 ||
        userChoiceNum === 2 && computerChoice == 1 ||
        userChoiceNum === 3 && computerChoice == 2)
        return console.log("You win!");
    else{
        return console.log("You lose!");
    }
}

play()

console.log(computerChoice);
console.log(userChoiceNum);
}