/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function(nums, queries) {
    let visit = new Array(nums.length).fill(0)
    let seq = []
    for (let i = 0; i < nums.length; i++) {
        seq.push([i, nums[i]])
    }
    seq.sort((a, b) => {
        if (b[1] === a[1]) return b[0] - a[0]
        return b[1] - a[1]
    })
    let sum = nums.reduce((sum, num) => {
        return num + sum
    }, 0)
    let res = []
    for (let query of queries) {
        if (visit[query[0]] != 1) {
            sum -= nums[query[0]]
            visit[query[0]] = 1
        }
        for (let i = 0; i < query[1]; i++) {
            if (seq.length) {
                while (visit[seq[seq.length - 1][0]]) seq.pop()
                sum -= nums[seq[seq.length - 1][1]]
                visit[seq[seq.length - 1][0]] = 1
                seq.pop()
            } 
        }
        res.push(sum)
    }
    return res
};

unmarkedSumArray([1,2,2,1,2,3,1], [[1,2],[3,3],[4,2]])