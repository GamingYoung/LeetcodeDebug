var maxProfit = function (k, prices) {
    const dp = new Array(2 * k).fill().map(x => new Array(prices.length))
    for (let i = 0; i < k; i++) {
        dp[2 * i][0] = -prices[0]
        dp[2 * i + 1][0] = 0
    }
    for (let i = 1; i < prices.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], -prices[i])
    } 
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j < 2 * k; j++) {
            if (j % 2 === 0) {
                dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i - 1] - prices[i])
            } else {
                dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i - 1] + prices[i])
            }
        }
    }
    return dp.pop().pop()
};

maxProfit(2, [2,1,4,5,2,9,7])