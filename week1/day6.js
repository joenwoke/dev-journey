// Objects: Key value data containers

// Object example
let person = {
    name: "Merlin",
    age: 22,
    isStudent: true
};

// To access values, use dot . or brackets [] for keys.
console.log(person.name);

// Alternatively
console.log(person["age"]);

// Modify values
person.age = 23;
console.log(person.age);

person["isStudent"] = false;
console.log(person.isStudent);

person.major = "ITM";
console.log(person.major);

// Looping through objects
for (let key in person) {
    console.log(key + ":" + person[key]);
}
// person[key] here means: use the value of the variable key to access a property of person. 
// person.key here means: look for a property named "key" (literally) on the person object.