/**
 * This question is asked by Amazon. 
 * Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). 
 * You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters. 
 * 
 * @param {*} sentence1 
 * @param {*} sentence2 
 * @returns 
 */
const uncommonWords = (sentence1, sentence2) => {
  const s1 = new Set(sentence1.split(" "));
  const s2 = new Set(sentence2.split(" "));
  const u = new Set();
  for (let w of Array.from(s1)) {
    if (!s2.has(w)) {
      u.add(w);
    }
  }
  for (let w of Array.from(s2)) {
    if (!s1.has(w)) {
      u.add(w);
    }
  }
  return Array.from(u);
};

console.log(
  'sentence1 = "the quick", sentence2 = "brown fox": ["the", "quick", "brown", "fox"] should be',
  uncommonWords("the quick", "brown fox")
);
console.log(
  'sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire": ["beat", "to", "lost"] should be',
  uncommonWords("the tortoise beat the haire", "the tortoise lost to the haire")
);
console.log(
  'sentence1 = "copper coffee pot", sentence2 = "hot coffee pot": ["copper", "hot"] should be',
  uncommonWords("copper coffee pot", "hot coffee pot")
);
