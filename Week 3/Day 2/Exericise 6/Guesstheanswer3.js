5 + "34"
// Prediction: "534" because the + operator with a string will concatenate the two values into a string.
// Actual: "534"

5 - "4"
// Prediction: 1 because the - operator will convert the second operand to a number and perform a subtraction operation.
// Actual: 1

10 % 5
// Prediction: 0 because the modulo operator returns the remainder of a division operation.
// Actual: 0

5 % 10
// Prediction: 5 because the modulo operator returns the remainder of a division operation.
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript" because the + operator with two strings will concatenate them into a single string.
// Actual: "JavaScript"

" " + " "
// Prediction: " " because the + operator with two strings will concatenate them into a single string, with a space in between.
// Actual: " "

" " + 0
// Prediction: "0" because the + operator with a string and a number will convert the number to a string and concatenate the two strings.
// Actual: " 0"

true + true
// Prediction: 2 because true is converted to 1 and the + operator will perform addition.
// Actual: 2

true + false
// Prediction: 1 because true is converted to 1 and false is converted to 0, and the + operator will perform addition.
// Actual: 1

false + true
// Prediction: 1 because true is converted to 1 and false is converted to 0, and the + operator will perform addition.
// Actual: 1

false - true
// Prediction: -1 because true is converted to 1 and false is converted to 0, and the - operator will perform subtraction.
// Actual: -1

!true
// Prediction: false because the ! operator will negate the boolean value of true.
// Actual: false

3 - 4
// Prediction: -1 because the - operator will perform a subtraction operation.
// Actual: -1

"Bob" - "bill"
// Prediction: NaN because both operands are strings and the - operator cannot perform a subtraction operation on strings.
// Actual: NaN
