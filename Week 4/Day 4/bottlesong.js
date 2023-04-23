let numBottles = prompt("Enter the number of bottles to start: ");

while (numBottles >= 0) {
  let bottleText = numBottles === 1 ? "bottle" : "bottles";
  let bottleText2 = (numBottles - 1) === 1 ? "bottle" : "bottles";
  let nextNumBottles = numBottles - 1;
  let nextBottleText = nextNumBottles === 1 ? "bottle" : "bottles";
  let takeDown = numBottles === 1 ? "it" : "them";

  console.log(numBottles + " " + bottleText + " of beer on the wall");
  console.log(numBottles + " " + bottleText + " of beer");
  console.log("Take " + numBottles + " down, pass " + takeDown + " around");
  
  if (nextNumBottles === 0) {
    console.log("No more bottles of beer on the wall");
  } else {
    console.log(nextNumBottles + " " + nextBottleText + " of beer on the wall");
  }
  
  numBottles--;
}
