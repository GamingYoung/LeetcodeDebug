/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = []
    nums.sort((a, b) => a - b)
    const add = function(i) {
        while (i < nums.length - 1 && nums[i + 1] === nums[i]) i++
        return i + 1
    }
    const del = function(i) {
        while (i > 0 && nums[i - 1] === nums[i]) i--
        return i - 1
    }
    for (let i = 0; i < nums.length - 4; i = add(i)) {
        for (let j = i + 1; j < nums.length - 3; j = add(j)) {
            const curTarget = target - nums[i] - nums[j]
            let start = j + 1
            let end = nums.length - 1
            while (start < end) {
                if (nums[start] + nums[end] < curTarget) start = add(start)
                else if (nums[start] + nums[end] > curTarget) end = del(end)
                else {
                    res.push([nums[i], nums[j], nums[start], nums[end]])
                    start = add(start)
                    end = del(end)
                }
            }
        }
    }
    return res
};

fourSum([1,0,-1,0,-2,2], 0)