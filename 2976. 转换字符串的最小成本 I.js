/*
 * @Author: GamingYoung zzzz7057@163.com
 * @Date: 2023-12-26 19:49:48
 * @LastEditors: GamingYoung zzzz7057@163.com
 * @LastEditTime: 2023-12-26 19:57:29
 * @FilePath: /leetcodeDebug/2976. 转换字符串的最小成本 I.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const dp = new Array(4);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(4).fill(1000001);
        dp[i][i] = 0;
    }

    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < original.length; i++) {
        const start = original[i].charCodeAt(0) - base;
        const end = changed[i].charCodeAt(0) - base;
        for (let j = 0; j < 4; j++) {
            dp[start][j] = Math.min(dp[start][j], cost[i] + dp[end][j]);
        }
        for (let j = 0; j < 4; j++) {
            dp[j][end] = Math.min(dp[j][end], cost[i] + dp[j][start]);
        }
    }

    let sum = 0;
    for (let i = 0; i < source.length; i++) {
        const start = source[i].charCodeAt(0) - base;
        const end = target[i].charCodeAt(0) - base;
        if (dp[start][end] > 1000000) return -1;
        sum += dp[start][end];
    }

    return sum;
};

minimumCost("aaadbdcdac", "cdbabaddba", ["a","c","b","d","b","a","c"], ["c","a","d","b","c","b","d"], [7,2,1,3,6,1,7]);