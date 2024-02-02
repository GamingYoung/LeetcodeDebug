/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = -Infinity;
    let idx = 0;
    while (nums[idx] < 0) {
        res = Math.max(res, nums[idx]);
        idx += 1;
    }
    let temp = 0;
    for (let i = idx; i < nums.length; i++) {
        temp += nums[i];
        if (temp < 0) temp = 0;
        res = Math.max(temp, res);
    }
    return res;
};