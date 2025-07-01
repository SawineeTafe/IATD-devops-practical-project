// Import readline-sync
import readlineSync from 'readline-sync';

// Initialize an empty array to store words
let words = [];

// Collect 5 words from the user
for (let i = 0; i < 5; i++) {
  let word = readlineSync.question(`Enter word ${i + 1}: `);
  words.push(word);
}

// Print the words one by one
console.log('\nWords you entered:');
for (let word of words) {
  console.log(word);
}

// Check if each word is longer than the previous
let isValid = true;

for (let i = 1; i < words.length; i++) {
  if (words[i].length <= words[i - 1].length) {
    isValid = false;
    break;
  }
}

// Print result
if (isValid) {
  console.log('\n Success: Each word is longer than the last!');
} else {
  console.log('\n Failure: Not all words were longer than the previous one.');
}
