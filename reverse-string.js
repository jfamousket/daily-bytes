/**
 * This question is asked by Google.
 * Given a string, reverse all of its characters and return the resulting string.
 *
 * @param {*} str
 * @returns
 */
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log("Cat: taC", "should be", reverseString("Cat"));
console.log(
  "The Daily Byte: etyB yliaD ehT",
  "should be",
  reverseString("The Daily Byte")
);
console.log("civic: civic", "should be", reverseString("civic"));
