/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    const sum = stones.reduce(function (sum, stone) {
        return sum + stone
    }, 0)
    let mid = Math.floor(sum / 2)
    const dp = new Array(mid + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i]
        for (let j = mid; j - stone >= 0; j--) {
            if (dp[j - stone] != 0 || dp[j]) dp[j] = 1
        }
    }
    for (let i = mid; i >= 0; i--) {
        if (dp[i]) return sum - i - i
    }
};

lastStoneWeightII([31, 26, 33, 21, 40])