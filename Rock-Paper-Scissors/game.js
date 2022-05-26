function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const computer_choice = Math.floor(Math.random() * choice.length);
    // Have to take choice from array and return it 
    return computer_choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    // 1. Convert strings to all lowercase
    // 2. Compare to see if they're the same
    // 3. code for rock > scissors > paper > rock
    return playerSelection, computerSelection;
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));