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

// Objects inside arrays
let users = [
    { username: "Joseph", score: 100 },
    { username: "Bolu", score: 200 },
];
console.log(users[1].username);

// Football challenge
let players = [
  { name: "Messi", position: "Forward" },
  { name: "Modric", position: "Midfield" },
  { name: "Neuer", position: "Goalkeeper" }
];

players.forEach (player => {
    console.log(player.name + " plays " + player.position);
});

// Challenge
// Add new player to the array
players.push({name: "Ramos", position: "Defence" });
players.forEach (player => {
    console.log(player.name + " plays " + player.position);
});

// Remove the last player
players.pop();
players.forEach (player => {
    console.log(player.name + " plays " + player.position);
});

// Change Messi's position
players[0].position = "Centerback";
players.forEach(player => {
  console.log(player.name + " plays " + player.position);
});
// Alternatively, check if player's name is messi and change the position using if statement
players.forEach(player => {
  if (player.name === "Messi") {
    player.position = "Striker";
  }
});
players.forEach(player => {
  console.log(player.name + " plays " + player.position);
});

// Inventory system challenge
let inventory = {
    
}