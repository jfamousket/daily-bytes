/**
 * This question is asked by Google. 
 * Given an array of integers, return whether or not two numbers sum to a given target, k. 
 * Note: you may not sum a number with itself. 
 */
function twoSum(arr, k) {
   arr.sort((a, b) => a - b)
   for (let start = 0, end = arr.length - 1; start < end; ) {
	   const sum = arr[start] + arr[end];
	   if (sum > k) end--;
	   else if (sum < k) start++;
	   else return true;
   }
   return false;
}
console.log('[1, 3, 8, 2], k = 10: true should be', twoSum([1,3,8,2], 10))
console.log('[3, 9, 13, 7], k = 8: false should be', twoSum([3,9,13,7], 8))
console.log('[4, 2, 6, 5, 2], k = 4: true should be', twoSum([4,2,6,5,2], 4))
