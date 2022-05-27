//Rock Logic

if (lowercase_player === "rock" and lowercase_computer === "paper") {
    result = 'Computer Chose Paper. Computer Wins :(';
} else if (lowercase_player === "rock" and lowercase_computer === "rock"){
    result = "It's a Tie! Both chose rock!"
} else {
    result = "You Win!"
}
return lowercase_player, result;
}