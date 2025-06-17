//Control structures in JavaScript

// if statement example
let age = 9;
if (age >= 18) {
    console.log("You are an adult"); }
else if (age >=10) {
    console.log("You are a teenager");
}
else {
    console.log("You are a child");
}

// Switch statements
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are sweet.");
    break;
  case "banana":
    console.log("Bananas are rich in potassium.");
    break;
  default:
    console.log("Unknown fruit.");
}

// More conditional statements examples
let light = "green";

if (light === "green") {
  console.log("Go!");
} else if (light === "yellow") {
  console.log("Slow down.");
} else {
  console.log("Stop.");
}

// Loops - for, do while, while

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

//while loop
let i = 0;
while (i < 3) {
  console.log("While Loop:", i);
  i++;
}

// do.....while loop
let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 3);