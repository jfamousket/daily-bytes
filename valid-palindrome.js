/**
 * This question is asked by Facebook.
 * Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
 * Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
 *
 * @param {*} str
 * @returns
 */
const validPalindrome = (str) => {
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

console.log(validPalindrome("level"), "should be", true);
console.log(validPalindrome("algorithm"), "should be", false);
console.log(
  validPalindrome("A man, a plan, a canal: Panama."),
  "should be",
  true
);
