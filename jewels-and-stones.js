/**
 * This question is asked by Amazon.
 * Given a string representing your stones and another string representing a list of jewels,
 * return the number of stones that you have that are also jewels.
 */
const jewelsAndStones = (jewels, stones) => {
  const jewelSet = new Set(jewels.split(''));
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) count++;
  }
  return count;
};

console.log(
  'jewels = "abc", stones = "ac": 2 should be',
  jewelsAndStones('abc', 'ac')
);
console.log(
  'jewels = "Af", stones = "AaaddfFf": 3 should be',
  jewelsAndStones('Af', 'AaaddfFf')
);
console.log(
  'jewels = "AYOPD", stones = "ayopd": 0 should be',
  jewelsAndStones('AYOPD', 'ayopd')
);
