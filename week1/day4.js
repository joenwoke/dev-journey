// Scopes
// Global scopes
let language = "JavaScript";

function sayLanguage() {
    console.log(language);
}
sayLanguage();

// Function/Local scope
function localScopeExample() {
    let message = "Hello";
    console.log(message);
}
localScopeExample(); // Works

/*
console.log(message); -> Reference Erros because message is trapped inside the function
*/

// Block scope (let and const only)
if (true) {
    let color = "blue";
    const mood = "happy";
}
/*
- console.log(color);  -> Reference Error because color is trapped inside the if statement
- var is not block-scoped, it leaks
*/

// Function challenge
function outer() {
  let outerVar = "I am outer"; // Scoped to outer()

  function inner() {
    let innerVar = "I am inner"; // Scoped to inner()
    console.log(outerVar); // Works: inner() can access outerVar via closure
    console.log(innerVar); // Works: inner() can access its own variable
  }
  /*
  inner();
  console.log(innerVar); // Error: innerVar is not defined in outer()
  */
}

outer();


// Hoisting
// Function Declarations are hoisted
greet(); // Works before it is defined

function greet() {
    console.log("Hello");
}
// The entire function is "moved" to the top during compile.

// Function expressions are not hoisted
/*
hello();  -> Error: greet is not a function
*/

const hello = function() {
    console.log("Hello");
};

// Variable hoisting with var
console.log(a); // undefined
var a = 10;
/* Hoisting only applies to declarations with var (and function declarations),
not with let or const (which are hoisted but not initialized). JavaScript sees this as:

var a;   // Declaration is hoisted to the top.
a = 10;  // Assignment stays where it is.

*/

function loginCheck(user, pass) {
    if (user === "admin" && pass === "1234")
        return "Access granted"
}