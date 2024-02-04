/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 初始化
    const len = s.length;
    const s_arr = new Array(2 * len - 1).fill('#');
    for (let i = 0; i < len * 2 - 1; i += 2) {
        s_arr[i] = s[Math.floor(i / 2)];
    }

    const alphabetHash = new Map();
    const dp = new Array(s_arr.length).fill(1);
    alphabetHash.set(s_arr[0], [0]);
    let max = [0, 1];
    for (let i = 1; i < s_arr.length; i++) {
        const same = alphabetHash.get(s_arr[i]);
        if (same === undefined) {
            alphabetHash.set(s_arr[i], [i]);
        } else {
            for (let j = 0; j < same.length; j++) {
                const mid = (same[j] + i) / 2;
                if (i - mid === dp[mid]) dp[mid]++;
                if (dp[mid] > max[1]) max = [mid, dp[mid]];
            }
            same.push(i);
            alphabetHash.set(s_arr[i], [...same]);
        }
    }

    const res = [];
    for (let i = max[0] - max[1] + 1; i < max[0] + max[1]; i++) {
        if (s_arr[i] != '#') res.push(s_arr[i]);
    }
    return res.join('');
};

longestPalindrome('abb');