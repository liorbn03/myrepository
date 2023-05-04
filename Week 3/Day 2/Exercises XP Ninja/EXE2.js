let input = prompt("Enter a string of numbers separated by commas:");
let numbers = input.split(",");
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += parseInt(numbers[i]);}

console.log("The sum of the numbers is:", sum);
