let c;
let a = 34;
let b = 21;

console.log(a + b); // Output: 55
// Prediction: The output will be 55, because a and b are initialized to 34 and 21 respectively, and adding them together will give 55
// Actual: 55

a = 2;

console.log(a + b); // Output: 23
// Prediction: The output will be 23, because a has been reassigned to 2, so adding a and b together will give 23
// Actual: 23

console.log(3 + 4 + '5'); // Output: "75"
// Prediction: The output will be "75", because the addition operator will first add 3 and 4, which gives 7. Then, since the last operand is a string, JavaScript will convert 7 to a string and concatenate it with "5", giving "75"
// Actual: "75"
