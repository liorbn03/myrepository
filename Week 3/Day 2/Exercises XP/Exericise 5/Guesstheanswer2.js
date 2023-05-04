//example
typeof("potato")
// Prediction: Vegetable
// Actual: String

typeof(15)
// Prediction: 15 ,because its a numeric value
// Actual: number
console.log(typeof(15));

typeof(5.5)
// Prediction: 5.5 ,because its a numeric value
// Actual: number
console.log(typeof(5.5));

typeof(NaN)
// Prediction: number ,because its a numeric value
// Actual: number
console.log(typeof(NaN));

typeof("hello")
// Prediction: string because "hello" is a string of chars
// Actual: string
console.log(typeof("hello"));

typeof(true)
// Prediction: boolean, because true represents a logical value
// Actual: boolean
console.log(typeof(true));

typeof(1 != 2)
// Prediction: boolean, because 1!=2 returns as a boolean value 
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers", because the +operator concatenates the two strings
// Actual: string
console.log(typeof("hamburger" + "s"));

"hamburgers" - "s"
// Prediction: NaN, because the - operator is not applicable to strings and will result in an invalid expression
// Actual: number
console.log(typeof("hamburger" - "s"));


"1" + "3"
// Prediction: 13 
// Actual: number
console.log(typeof("1" + "3"));

"1" - "3"
// Prediction: -2
// Actual: number
console.log(typeof("1" - "3"));

"johnny" + 5
// Prediction: johnny5, because the + operator concatenates the string and the number as a string
// Actual: number
console.log(typeof("johnny" + 5));

"johnny" - 5
// Prediction: NaN ,because the - operator is not applicable to strings and will result in an invalid expression
// Actual: number
console.log(typeof("johnny" - 5));

99 * "hello"
// Prediction: NaN ,because the * operator is not applicable to strings and will result in an invalid expression
// Actual: number
console.log(typeof(99 * "hello"));

1 != 1
// Prediction: false ,because the expression 1 != 1 is false
// Actual: boolean
console.log(typeof(1 != 1));

1 == "1"
// Prediction: true ,because the == operator performs type coercion and converts the string to a number
// Actual: boolean
console.log(typeof(1 == "1"));

1 === "1"
// Prediction: false, because the === operator does not perform type coercion and checks for strict equality between the two operands, which are of different types
// Actual: boolean
console.log(typeof(1 === "1"));