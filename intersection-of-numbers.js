/**
 * This question is asked by Google. 
 * Given two integer arrays, return their intersection. 
 * Note: the intersection is the set of elements that are common to both arrays. 
 * 
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */
const intersectionOfNumbers = (nums1, nums2) => {
  const s1 = new Set(nums1);
  const s2 = new Set();
  for (let n of nums2) {
    if (s1.has(n)) {
      s2.add(n);
    }
  }
  return Array.from(s2);
};
console.log(
  "nums1 = [2, 4, 4, 2], nums2 = [2, 4]: [2, 4] should be",
  intersectionOfNumbers([2, 4, 4, 2], [2, 4])
);
console.log(
  "nums1 = [1, 2, 3, 3], nums2 = [3, 3]: [3] should be",
  intersectionOfNumbers([1, 2, 3, 3], [3, 3])
);
console.log(
  "nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7]: [] should be",
  intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7])
);
