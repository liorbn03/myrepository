let str1 = "sas";
let str2 = "App";

let swappestr1 = str2.slice(0,2) + str1.slice(2);
let swappestr2 = str1.slice(0,2) + str2.slice(2);

let newword = swappestr1 + " " + swappestr2;
console.log(newword);


let firstword = "hello";
let secondword = "world";

let newfirstword = secondword.slice(0,2) + firstword.slice(2);
let newsecondword = firstword.slice(0,2) + secondword.slice(2);

let thirdword = newfirstword + " " + newsecondword;
console.log(thirdword);