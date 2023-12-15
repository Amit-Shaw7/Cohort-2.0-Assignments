/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str = "") {
  let st = 0;
  let end = str.length - 1;
  let strLower = str.toLowerCase().split(" ").join("");

  while (st < end) {
    let charAtSt = strLower.charAt(st);
    let charAtEnd = strLower.charAt(end);

    if (!isAlphabet(charAtSt)) {
      st++;
      continue;
    }

    if (!isAlphabet(charAtEnd)) {
      end--;
      continue;
    }

    if (strLower.charAt(st) !== strLower.charAt(end)) {
      return false;
    }
    st++;
    end--;
  }
  return true;
}

function isAlphabet(ch = '') {
  if (ch.toLowerCase() !== ch.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("hello"));

module.exports = isPalindrome;
