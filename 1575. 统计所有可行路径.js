/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    // 动态规划
    const dp = new Array(fuel + 1).fill().map(x => new Array(locations.length).fill(0))
    dp[0][finish] = 1
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            let path = 0
            // 计算到每个点的距离，然后再到3，floyd算法思想
            for (let k = 0; k < locations.length; k++) {
                const cost = Math.abs(locations[j] - locations[k])
                if (i >= cost && k != j) path += dp[i - cost][k]
                if (k === finish && k === j) path += 1
            }
            dp[i][j] = path % 1000000007
        }
    }
    return dp[dp.length - 1][start]
    
    // // 回溯是对的，但是超时了
    // let res = start === finish
    // const route = function (start, fuel) {
    //     for (let i = 0; i < locations.length; i++) {
    //         if (i === start) continue;
    //         const cost = Math.abs(locations[i] - locations[start])
    //         if (cost <= fuel) {
    //             if (i === finish) res += 1
    //             route(i, fuel - cost)
    //         }
    //     }
    // }
    // route(start, fuel)
    // let a = 1
    // return res % 1000000007
};

countRoutes([4, 3, 1], 1, 0, 6) // 5