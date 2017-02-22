var randNum = Math.random();
var compChoice;

if (randNum >= 0.33) {
	compChoice = "rock";
} else if (randNum > 0.33 && randNum < 0.66) {
	compChoice = "paper";
} else {
	compChoice = "scissors";
}

document.getElementById('rock').onclick = function() {
   if (compChoice == "rock") {
   	document.getElementById('results').innerHTML = "It's a tie!";
   } else if (compChoice == "paper") {
   	document.getElementById('results').innerHTML = "You lose!";
   } else {
   	document.getElementById('results').innerHTML = "You win!";
   }
};

document.getElementById('paper').onclick = function() {
   if (compChoice == "paper") {
   	document.getElementById('results').innerHTML = "It's a tie!";
   } else if (compChoice == "scissors") {
   	document.getElementById('results').innerHTML = "You lose!";
   } else {
   	document.getElementById('results').innerHTML = "You win!";
   }
};

document.getElementById('scissors').onclick = function() {
   if (compChoice == "scissors") {
   	document.getElementById('results').innerHTML = "It's a tie!";
   } else if (compChoice == "rock") {
   	document.getElementById('results').innerHTML = "You lose!";
   } else {
   	document.getElementById('results').innerHTML = "You win!";
   }
};
