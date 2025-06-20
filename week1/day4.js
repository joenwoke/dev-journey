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

  inner();
  console.log(innerVar); // Error: innerVar is not defined in outer()
}

outer();
