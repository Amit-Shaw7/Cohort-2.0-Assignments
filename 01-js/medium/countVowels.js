/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


function isVowel(ch='') {
  ch = ch.toLowerCase();
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    return true;
  }
  return false;
}

function countVowels(str = "") {
  // Your code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (isVowel(ch)) {
      count++;
    }
  }
  return count
}

console.log(countVowels("hello"));

module.exports = countVowels;