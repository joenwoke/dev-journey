// Function declaration
function greet(name) {
    console.log("Hello, my name is " + name);
}
greet("Joseph");

// Function expression
const hello = function(name1) {
    console.log("Hello, ", name1);
};
hello("Daniel");

//Arrow functions (ES6)
const hey = (name2) => {
    console.log("Hey " + name2);
};
hey("Rose");

// Shorter version of arrow function
const hey1 = name3 => console.log("Hey " + name3);
hey1("John");

// Return values for functions
function add(a, b) {
    return a + b;
}
let sum = add(3, 4);
console.log("Sum:", sum);

function multiply(c, b) {
    return c * b;
}
let product = multiply(10, 3);
console.log("Product:", product)

// Greet user challenge
const greetUser = userName => console.log("Hello", userName);
greetUser("Hailee");

function getFullName(first, last) {
    return first + last;
}