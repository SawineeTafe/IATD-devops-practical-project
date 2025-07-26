// Import readline-sync
import readlineSync from 'readline-sync';
// Ask user for their name
let myName = readlineSync.question('What is your name? ');

// Define numbers
let num1 = 10;
let num2 = 25;

// Greet the user
console.log('Hello!');

// Print user name
console.log('My name is ' + myName);

// Calculate and print the sum
let sum = num1 + num2;
console.log('The sum of num1 and num2 is: ' + sum);

// Ask user for a reply to the greeting
let reply = readlineSync.question('How are you today? ');

// Print user's reply
console.log('You said: ' + reply);

// Check the length of the reply
if (reply.length > 10) {
  console.log('Wow, such a long response!');
} else {
  console.log('Nice and concise!');
}

// Add an array of the last three meals
let meals = ['Soup', 'Grilled Chicken', 'Pad Thai'];

// Print each meal in order
console.log('Here are the last three meals I had:');
console.log(meals[0]); // Least recent
console.log(meals[1]);
console.log(meals[2]); // Most recent

//add next meal
meals.push('Burger');
console.log('The next meal I will eat:');
console.log(meals[3]);

// Create a new empty array to store user inputs
let userInputs = [];

// Use a for-loop to get 3 inputs from the user
/*for (let i = 0; i < 3; i++) {
  let input = readlineSync.question(`Enter item ${i + 1}: `);
  userInputs.push(input);
}

// Print the resulting array
console.log('You entered:');
console.log(userInputs);

*/

let count = 0;

while (count < 3) {
  let input = readlineSync.question(`Enter item ${count + 1}: `);
  userInputs.push(input);
  count++;
}

console.log('You entered:');
console.log(userInputs);
