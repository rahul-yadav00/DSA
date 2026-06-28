// Runtime: 0ms (Beats 100%) | Memory: 56.34MB (Beats 93.88%)
// Approach: Two pointers
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let w = 0;
    for ( let r = 1; r < nums.length; r++){
        if ( nums[r] != nums[w]){
            nums[w+1]=nums[r];
            w++
        }
    }
    return w+1;
};
