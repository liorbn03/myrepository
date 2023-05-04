let sentence = prompt("Enter a sentence containing the word 'Nemo':");
let index = sentence.indexOf("Nemo");
console.log(sentence);

if (index >= 0) {
  console.log(`I found Nemo at ${index}`);
} else {
  console.log("I can't find Nemo");
}
