

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const computer_choice = Math.floor(Math.random() * choices.length);
    const final_comp_choice = choices[computer_choice];
    // Have to take choice from array and return it 
    return final_comp_choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    // 1. Convert strings to all lowercase
    // 2. Compare to see if they're the same
    // 3. code for rock > scissors > paper > rock
    const player = playerSelection;
    const computer = computerSelection;
    const lowercase_player = player.toLowerCase();
    const lowercase_computer = computer.toLowerCase();
    if (lowercase_player === "rock" && lowercase_computer === "scissors") {
        const result = "You Win!!"
        return result;
    } else if (lowercase_player === "rock" && lowercase_computer === "rock") {
        const result = "It's a tie!!"
        return result;
    } else if (lowercase_player === "paper" && lowercase_computer === "rock"){
        const result = "You Win!!"
        return result;
    } else if (lowercase_player === "paper" && lowercase_computer === "paper") {
        const result = "It's a tie!!"
        return result
    } else if (lowercase_player === "scissors" && lowercase_computer === "paper") {
        const result = "You Win!!"
        return result
    } else if (lowercase_player === "scissors" && lowercase_computer === "scissors") {
        const result = "It's a tie!!"
        return result
    } else {
        const result = "You lose!! :("
        return result;
    };
    
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  