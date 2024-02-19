/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i + 1) continue;
        else if (nums[i] > len && nums[i] <= 0) nums[i] = -Infinity
        else {
            let temp = i
            let cur = nums[i]
            while(cur >= 1 && cur <= len && cur != temp + 1) {
                temp = cur - 1
                const p = nums[cur - 1]
                nums[cur - 1] = cur
                cur = p
            }
            nums[i] = -Infinity
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1
    }
    return len + 1
};

firstMissingPositive([3,4,-1,1]) // 2