// First JavaScript code
console.log('Hello World');

// Variables - they are boxes that store values of different kinds
let name = 'Sebastian'; // This wil give undefined, unless I add a value
console.log(name);

let FirstName = 'Kevin', lastName = 'Williams';


// Constants - this declaration type does not allow reassignment
// If we do not need reassigning varibles, then by default we should use const to declare variables
const interestRate = 1;
console.log(interestRate);


// Primitive Types (value types): String, Integer, Boolean, Undefined and Null

// let surname = 'Jackson' // String Literal
// let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // Undefined Literal - this is a type AND a value
let middleName = null; // Null Literal - it is used to clear the value of a variable


// Dynamic Typing - JavaScript is a dynamic language and the type of a variable can change at runtime




// Reference Types - these are Objects, Arrays and Functions


// Objects - these are like objects in rel life
let person = {
    name: 'Glen',
    age: 38
}; // these curly braces are what we call Object Literal

// Dot Notation (.) - this is the prefered approach
person.name = 'Ben';

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);


// Arrays - this is a data structure that we use to represent a list of items
let selectedColors = ['red', 'blue']; // Square brackets indicate an array
selectedColors[2] = 'green' // this added the color green to the array
console.log(selectedColors.length); // the .length returns the number of elements in an array


// Functions - a set of statements that performs a task or calculates a value
function greet(name, lastName) { // this line holds a parameter
    // This represents the 'body' of the function
    console.log('Hello ' + name + ' ' + lastName);
}
// This is a function call and it hold an argument 
greet('John', 'Smith');
greet('Arthur', 'Clyde');


// Types of Functions - there are functions that perform a task (like the one above) OR calculates a value
// This is a function that calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));





