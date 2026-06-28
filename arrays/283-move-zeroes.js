// Runtime: 1ms (Beats 76.10%) | Memory: 61.22MB (Beats 8.51%)
// Approach: Two pointers
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let w = 0;
    for (let r = 0; r < nums.length; r++){
        if (nums[r] !== 0){
            [nums[w],nums[r]]=[nums[r],nums[w]];
            w++
        }
    }
};
