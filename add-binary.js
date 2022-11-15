/**
 * This question is asked by Apple.
 * Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
 * Note: neither binary string will contain leading 0s unless the string itself is 0
 *
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
const addBinary = (str1, str2) => {
  const len = Math.max(str1.length, str2.length);
  str1 = str1.padStart(len, "0");
  str2 = str2.padStart(len, "0");
  let rem = 0;
  let sum = "";
  for (let i = len - 1; i >= 0; i--) {
    const num1 = parseInt(str1[i]);
    const num2 = parseInt(str2[i]);
    const iSum = num1 + num2 + rem;
    sum += iSum <= 1 ? iSum : Math.floor(iSum / 3, 0);
    rem = Math.floor(iSum / 2);
  }
  if (rem > 0) {
    sum = rem + sum;
  }
  return sum;
};

console.log("100 + 1:", "101 should be", addBinary("100", "1"));
console.log("11 + 1:", "100 should be", addBinary("11", "1"));
console.log("1 + 0:", "1 should be", addBinary("1", "0"));
