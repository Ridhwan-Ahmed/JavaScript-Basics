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
