/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const jump = function(nums, start, flag) {
        const temp = nums[start];
        while (nums[start] === temp) start += flag;
        return start;
    }
    const res = [];
    for (let i = 0; i < nums.length - 2; i = jump(nums, i, 1)) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            if (nums[start] + nums[end] + nums[i] === 0) {
                res.push([nums[start], nums[end], nums[i]]);
                start = jump(nums, start, 1);
                end = jump(nums, end, -1);
            }
            else if (nums[start] + nums[end] + nums[i] < 0) start = jump(nums, start, 1);
            else end = jump(nums, end, -1);
        }
    }
    return res;
};