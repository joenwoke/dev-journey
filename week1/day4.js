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