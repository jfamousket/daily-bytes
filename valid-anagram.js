/**
 * This question is asked by Facebook. 
 * Given two strings s and t return whether or not s is an anagram of t. 
 * Note: An anagram is a word formed by reordering the letters of another word.
 * 
 * @param {*} s 
 * @param {*} t 
 * @returns 
 */
const validAnagram = (s, t) => {
    const mt = new Map();
    for (let i = 0; i < t.length; i++) {
        mt.set(t[i], (mt.get(t[i]) ?? 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (!mt.has(s[i]) || mt.get(s[i]) === 0) return false;
        mt.set(s[i], mt.get(s[i]) - 1);
    }

    return true;
}

console.log("s = \"cat\", t = \"tac\": true should be", validAnagram("cat", "tac"))
console.log("s = \"listen\", t = \"silent\": true should be", validAnagram("listen", "silent"))
console.log("s = \"function\", t = \"program\": false should be", validAnagram("function", "program"))