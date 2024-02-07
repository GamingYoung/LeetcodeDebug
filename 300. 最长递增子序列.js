/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i]);
        } else {
            let start = 0;
            let end = dp.length - 1;
            while (start < end) {
                const mid = Math.floor((start + end) / 2);
                if (dp[mid] < nums[i]) start = mid + 1;
                else if (dp[mid] > nums[i]) end = mid;
                else end = mid;
            }
            dp[start] = nums[i];
        }
    }
    return dp.length;
};