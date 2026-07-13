// ==========================
// Exercise 1: Object Basics
// ==========================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding", "gaming"],
  address: {
    city: "New York",
    country: "USA"
  }
};

// Access properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modify properties
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

console.log(person);


// ==========================
// Exercise 2: Object Methods
// ==========================

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(4, 2));


// ==========================
// Exercise 3: Object Iteration
// ==========================

const scores = {
  math: 95,
  english: 88,
  science: 92
};

// Keys
console.log(Object.keys(scores));

// Values
console.log(Object.values(scores));

// Entries
console.log(Object.entries(scores));

// Loop through the object
for (const subject in scores) {
  console.log(subject + ": " + scores[subject]);
}