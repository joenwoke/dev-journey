// Arrays -> An array is like a shelf that holds multiple values in order
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);

// To modify this array
fruits[2] = "Mango";
console.log(fruits);

/* Array Methods
push() -> adds to the end */
fruits.push("Water melon");
console.log(fruits);

// pop() -> remove from the end
fruits.pop();
console.log(fruits);

// unshift() -> add to the front
fruits.unshift("Grape");
console.log(fruits);

// shift() -> remove from the front
fruits.shift();
console.log(fruits);

// length -> count the length
fruits.length;
console.log(fruits.length);

// includes() -> checks if value exists
fruits.includes("Banana");
console.log(fruits.includes("Banana")); 

// Practice
let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
