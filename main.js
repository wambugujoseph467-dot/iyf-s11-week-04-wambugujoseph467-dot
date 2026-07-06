// Variable declarations
let name = "Joseph Wambugu";
let age = 20;      // 
const birthYear = 2006;   // 

// typeof operator
console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof true);      // boolean


// ==============================
// Task 7.2: Number Operations
// ==============================

// Basic math
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


// ==============================
// String Operations
// ==============================

let firstName = "Joseph";
let lastName = "Wambugu";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(greeting);
console.log(message);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Joseph"));


// ==============================
// Comparison & Logical Operators
// ==============================

// Comparison
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

// Logical
console.log(true && true);
console.log(true || false);
console.log(!true);


// ==============================
// Challenge
// ==============================

let myAge = 20; 

let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;

let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - myAge);

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year you'll turn 100:", yearTurn100);