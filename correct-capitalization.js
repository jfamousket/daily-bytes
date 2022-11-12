/**
 * This question is asked by Google.
 * Given a string, return whether or not it uses capitalization correctly.
 * A string correctly uses capitalization if all letters are capitalized,
 * no letters are capitalized, or only the first letter is capitalized.
 *
 * @param {*} str
 * @returns
 */
const correctCapitalization = (str) => {
  return (
    str.toUpperCase() === str ||
    str[0].toUpperCase() + str.slice(1) === str ||
    str.toLowerCase() === str
  );
};

console.log(correctCapitalization("USA"), "should be", true);
console.log(correctCapitalization("Calvin"), "should be", true);
console.log(correctCapitalization("compUter"), "should be", false);
console.log(correctCapitalization("coding"), "should be", true);
