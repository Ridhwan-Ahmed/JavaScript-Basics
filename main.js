let myString = "Hello, World!";
let myNumber = 21;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myObject = {
    name: "Ridhwan",
    age: 21
};
let mySymbol = Symbol("unique");

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);

// Part 2: Arrays (10 Marks)

// Create an array of numbers
let numbers = [5, 10, 15, 20, 25];

// Use the map method to create a new array where each number is multiplied by 2
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Use the filter method to create a new array that only includes numbers greater than 10
let filteredNumbers = numbers.filter(num => num > 10);
console.log("Filtered Numbers (greater than 10):", filteredNumbers);

// Use the reduce method to find the sum of all numbers in the array
let sumOfNumbers = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// Use the forEach method to print each number in the array to the console
console.log("Each number in the array:");
numbers.forEach(num => console.log(num));

// Part 3

// Create a function named greet that takes a name parameter and prints a greeting message to the console
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Example usage of greet function
greet("Alice");
greet("Bob");

// Create a function named sumArray that takes an array of numbers as a parameter and returns the sum of all elements
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage of sumArray function
let exampleArray = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(exampleArray));

// Create a function named findMax that takes an array of numbers as a parameter and returns the maximum number
function findMax(numbers) {
    return Math.max(...numbers);
}

// Example usage of findMax function
let anotherArray = [3, 7, 2, 9, 5];
console.log("Maximum number in array:", findMax(anotherArray));

