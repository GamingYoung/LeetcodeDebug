/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findLength = function(nums1, nums2) {
    const dp = new Array(nums1.length + 1).fill().map(x => new Array(nums2.length + 1).fill(0));
    let res = 0;
    for (let i = nums1.length - 1; i >= 0; i--) {
        for (let j = nums2.length - 1; j >= 0; j--) {
            dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
};