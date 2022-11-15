/**
 * This question is asked by Microsoft.
 * Given an array of strings, return the longest common prefix that is shared amongst all strings.
 * Note: you may assume all strings only contain lowercase alphabetical characters.
 * @param {*} array
 * @returns
 */
const longestCommonPrefix = (array) => {
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (longest[j] === array[i][j]) continue;
      longest = array[i].slice(0, j);
      break;
    }
    longest = longest.slice(0, Math.min(array[i].length, longest.length));
  }
  return longest;
};

console.log(
  "col should be",
  longestCommonPrefix(["colorado", "color", "cold"])
);
console.log(" should be", longestCommonPrefix(["a", "b", "c"]));
console.log(
  "spot should be",
  longestCommonPrefix(["spot", "spotty", "spotted"])
);
console.log(
  "spot should be",
  longestCommonPrefix(["spot", "spotty", "spotted"].reverse())
);
