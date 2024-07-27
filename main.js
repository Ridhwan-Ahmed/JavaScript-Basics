// Data Types Section
console.log("Data Types Section");

// Number
let age = 25;
console.log("Age:", age);

// String
let name = "Suu Dozzy";
console.log("Name:", name);

// Boolean
let isStudent = true;
console.log("Is Student:", isStudent);

// Null
let car = null;
console.log("Car:", car);

// Undefined
let job;
console.log("Job:", job);

// Object
let person = {
    firstName: "Suu",
    lastName: "Dozzy",
    age: 30
};
console.log("Person:", person);

// Arrays Section
console.log("Arrays Section");

let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Adding an element to the array
fruits.push("Orange");
console.log("Fruits after push:", fruits);

// Removing the last element from the array
fruits.pop();
console.log("Fruits after pop:", fruits);

// Accessing an element in the array
console.log("First fruit:", fruits[0]);

// Functions Section
console.log("Functions Section");

// Function to greet a person
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Ruu"));

// Function to add two numbers
function add(a, b) {
    return a + b;
}

console.log("Addition of 5 and 3:", add(5, 3));

// Function to find the maximum of three numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Maximum of 5, 10, and 15:", findMax(5, 10, 15));

