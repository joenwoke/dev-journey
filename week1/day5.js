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
numbers.unshift(0);
numbers.pop();

console.log("Length is: " + numbers.length);
console.log("Includes 30:", numbers.includes(30)); 

// Looping through Arrays
let nums = [1, 2, 3];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    // i = 0, meaning the nums[i], is same as nums[0], which is at index 0 in the array
}

nums.forEach(num => {
    console.log("Value:", num);
});

/* The .forEach() method in JavaScript actually passes three arguments to the callback function:

array.forEach(function(currentValue, index, array) {
});

or 

array.forEach((currentValue, index, array) => {
});
*/

nums.forEach((num, index, arr) => {
  console.log(`Index: ${index}, Value: ${num}, Full Array: [${arr}]`);
});