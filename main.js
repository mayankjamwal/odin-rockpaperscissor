console.log("Running!")


function computerChoice(){
    const choiceList = ['rock','paper','scissor'];
    const choice = Math.floor(Math.random() * 3);
    return choiceList[choice];
}


function playTheGame(){
    const playerSelection = prompt("Choose your weapon! //Rock,Paper,Scissor");
    const computerSelection = computerChoice();
    if(computerSelection === playerSelection.toLowerCase()){
        console.log("It's a tie!");
        console.log(`computer : ${computerSelection} ; player : ${playerSelection}`);
    }
    else{
        if(computerSelection === "rock" && playerSelection.toLowerCase() === "paper"){
            console.log(`player : ${playerSelection.toUpperCase()}; computer: ${computerSelection.toUpperCase()}
            Player wins!`);
        }
        else{
            if(computerSelection === "paper" && playerSelection.toLowerCase() === "scissor"){
                console.log(`player : ${playerSelection.toUpperCase()}; computer: ${computerSelection.toUpperCase()}
                Player wins!`);
            }
            else{
                if(computerSelection === "scissor" && playerSelection.toLowerCase() === "rock"){
                    console.log(`player : ${playerSelection.toUpperCase()}; computer: ${computerSelection.toUpperCase()}
                Player wins!`);    
                }
            }
        }
        console.log(`player : ${playerSelection.toUpperCase()}; computer: ${computerSelection.toUpperCase()}
                Computer wins!`);
    }    
}

playTheGame();