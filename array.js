
// Exercise 1: Array Basics

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Access elements
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

// Modify arrays
fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

console.log(fruits);

// ==========================
// Exercise 2: Array Methods
// ==========================

const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(num => console.log(num * 2));

// map
const doubled = nums.map(num => num * 2);
console.log(doubled);

// filter
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);

// find
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

// reduce
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);

// includes
console.log(nums.includes(3));

// ==========================
// Build Tasks
// ==========================

const values = [5, -3, 8, 12, -6, 15];

// 1. Double all numbers
const doubleValues = values.map(num => num * 2);
console.log("Doubled:", doubleValues);

// 2. Remove negative numbers
const positiveValues = values.filter(num => num >= 0);
console.log("Positive:", positiveValues);

// 3. First number greater than 10
const firstGreater = values.find(num => num > 10);
console.log("First > 10:", firstGreater);

// 4. Product of all numbers
const product = values.reduce((total, num) => total * num, 1);
console.log("Product:", product);