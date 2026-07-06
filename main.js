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


// Exercise 1: Function Declarations

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test the functions
console.log(greet("Joseph"));
console.log(add(10, 5));
console.log(multiply(4, 6));
console.log(divide(20, 4));
console.log(divide(20, 0));


// Exercise 2: Build These Functions

// 1. Calculate Area
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 3. Is Even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get Initials
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

// 5. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test the functions
console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(8));
console.log(isEven(7));
console.log(getInitials("Joseph Wambugu"));
console.log(reverseString("JavaScript"));


// Exercise 3: Default Parameters

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Test the function
console.log(greetUser());
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));

// Challenge: Calculate Tip

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// Test the function
console.log(calculateTip(100));
console.log(calculateTip(200, 20));

// ==============================
// Exercise 1: If/Else Statements
// ==============================

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test the function
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(74));
console.log(getGrade(61));
console.log(getGrade(45));


// ========
// Exercise 3A: For Loop
// ==============================

for (let i = 0; i < 5; i++) {
    console.log(i);

}
// ==============================
// Exercise 3B: While Loop
// ==============================

let loopCount = 0;

while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

// ==============================
// Exercise 3C: For...of Loop
// ==============================

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

// ==============================
// Challenge 1: Print Numbers 1–100
// ==============================

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// ==============================
// Challenge 2: Even Numbers 1–50
// ==============================

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// ==============================
// Challenge 3: FizzBuzz
// ==============================

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ==============================
// Challenge 4: Triangle of Stars
// ==============================

let stars = "";

for (let i = 1; i <= 5; i++) {
    stars += "*";
    console.log(stars);
}