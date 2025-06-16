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

// Loops - for, do while, while
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}