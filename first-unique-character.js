/**
 * This question is asked by Microsoft. 
 * Given a string, return the index of its first unique character. 
 * If a unique character does not exist, return -1.
 * 
 * @param {*} str 
 * @returns 
 */
const firstUniqueCharacter = (str) => {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        map.set(str[i], (map.get(str[i]) ?? 0 ) + 1);
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) return i;
    }
    return -1;
};
console.log("abcabd: 2 should be", firstUniqueCharacter("abcabd"));
console.log("thedailybyte: 1 should be", firstUniqueCharacter("thedailybyte"))
console.log("developer: 0 should be", firstUniqueCharacter("developer"))
