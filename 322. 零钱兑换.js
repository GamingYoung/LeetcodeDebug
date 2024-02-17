/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // coins.sort((a, b) => a - b);
    const dp = new Array(amount + 1).fill(10001);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < dp.length; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    return dp[dp.length - 1] === 10001 ? -1 : dp.pop();
};