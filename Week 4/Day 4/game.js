// Prompt player 1 for a word
let word = prompt("Player 1, enter a word with a minimum of 8 letters:").toLowerCase();
while (word.length < 8) {
  word = prompt("The word should have a minimum of 8 letters. Please try again:").toLowerCase();
}

let wordArr = word.split("");
let guessArr = Array(word.length).fill("*");

let guesses = [];
let remainingGuesses = 10;

console.log("Guess the word:");
console.log(guessArr.join(" "));

// Continuously prompt player 2 for a letter
while (remainingGuesses > 0 && guessArr.includes("*")) {
  let guess = prompt("Player 2, enter a letter:").toLowerCase();
  if (guesses.includes(guess)) {
    console.log("You already guessed that letter. Try again.");
    continue;
  }
  guesses.push(guess);
  let found = false;
  for (let i = 0; i < wordArr.length; i++) {
    if (guess === wordArr[i]) {
      guessArr[i] = guess;
      found = true;
    }
  }
  console.log(guessArr.join(" "));
  console.log("Guesses: " + guesses.join(", "));
  if (!found) {
    remainingGuesses--;
    console.log("Wrong! You have " + remainingGuesses + " guesses left.");
  }
}

// Check if player 2 wins or loses
if (remainingGuesses === 0) {
  console.log("YOU LOSE. The word was " + word);
} else {
  console.log("CONGRATS YOU WIN!");
}
