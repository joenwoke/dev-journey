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
    
}