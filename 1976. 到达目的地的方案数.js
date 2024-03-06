/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    const g = Array.from({ length: n }, () => Array(n).fill(Infinity)); // 邻接矩阵
    for (const [x, y, d] of roads) {
        g[x][y] = d;
        g[y][x] = d;
    }
    const dis = Array(n).fill(Infinity);
    dis[0] = 0;
    const f = Array(n).fill(0);
    f[0] = 1;
    const done = Array(n).fill(false);
    while (true) {
        let x = -1;
        for (let i = 0; i < n; i++) {
            if (!done[i] && (x < 0 || dis[i] < dis[x])) {
                x = i;
            }
        }
        if (x === n - 1) {
            // 不可能找到比 dis[-1] 更短，或者一样短的最短路了（注意本题边权都是正数）
            return f[n - 1];
        }
        done[x] = true; // 最短路长度已确定（无法变得更小）
        for (let y = 0; y < n; y++) { // 尝试更新 x 的邻居的最短路
            const newDis = dis[x] + g[x][y];
            if (newDis < dis[y]) {
                // 就目前来说，最短路必须经过 x
                dis[y] = newDis;
                f[y] = f[x];
            } else if (newDis === dis[y]) {
                // 和之前求的最短路一样长
                f[y] = (f[y] + f[x]) % 1_000_000_007;
            }
        }
    }
};

countPaths(7, [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[5,4,1],[5,6,1]])