/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // If size of strings are different -> not an anagram
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  console.log(str1);
  console.log(str2);

  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      return false;
    }
  }


  return true;
}
const check = isAnagram("Debit Card", "Bad Credit");
console.log(check);

module.exports = isAnagram;
