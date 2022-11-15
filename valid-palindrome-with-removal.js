const isValidPalindrome = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  for (
    let left = 0, right = str.length - 1;
    left < str.length && right >= 0;

  ) {
    if (!alphabet.includes(str[left])) {
      left++;
      continue;
    }
    if (!alphabet.includes(str[right])) {
      right--;
      continue;
    }
    if (str[left] !== str[right]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
};

const removeCharAt = (str, index) => {
  return str.slice(0, index) + str.slice(index + 1);
};

/**
 * This question is asked by Facebook. 
 * Given a string and the ability to delete at most one character, return whether or not it can form a palindrome. 
 * Note: a palindrome is a sequence of characters that reads the same forwards and backwards. 
 * @param {*} str 
 * @param {*} i 
 * @param {*} origStr 
 * @returns 
 */
const validPalindromeWithRemoval = (str, i = 0, origStr = str) => {
  if (isValidPalindrome(str)) return true;
  if (i >= origStr.length) return false;
  return validPalindromeWithRemoval(removeCharAt(origStr, i), i + 1, origStr);
};

console.log("abcba: true should be", validPalindromeWithRemoval("abcba"));
console.log("foobof: true should be", validPalindromeWithRemoval("foobof"));
console.log("abccab: false should be",validPalindromeWithRemoval("abccab"));
