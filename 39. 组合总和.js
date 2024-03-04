/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const res = []
    const path = []
    let sum = 0
    const backTracking = function (start, sum) {
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backTracking(i, sum + candidates[i])
            path.pop()
        }
    }
    backTracking(0)
    return res
};

combinationSum([2, 3, 6, 7], 7)