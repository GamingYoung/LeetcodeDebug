/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
    const hash = new Array(31).fill(0)
    for (let i = 0; i < nums.length; i++) {
        let j = 0
        let num = nums[i]
        while (num != 0) {
            let a = num % 2
            num = num >> 1
            hash[j] += a
            j++
        }
    }
    let res = 0
    for (let i = 0; i < hash.length; i++) {
        if (hash[i] >= k) res += 2^i
    }
    return res
};

findKOr([7,12,9,8,9,15], 4)