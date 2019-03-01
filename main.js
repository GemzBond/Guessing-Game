const secretNumber = 5;

const stringGuess = prompt("Guess a number...");
const guess = Number(stringGuess);

if (guess === secretNumber) {
    alert("You are absolutely right!!")
} else if (guess > secretNumber) {
    alert("Too High")
} else {
    alert("Too Low")
}