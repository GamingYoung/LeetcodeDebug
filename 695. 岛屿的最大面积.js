/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const bfs = function(pos) {
        const queue = [[...pos]];
        while (queue.length) {
            const len = queue.length;
            let count = 0;
            for (let i = 0; i < len; i++) {
                const path = queue.shift();
                count += 1;
                for (let j = 0; j < dir.length; j++) {
                    const m = path[0] + dir[j][0];
                    const n = path[1] + dir[j][1];
                    if (m >= 0 && n >= 0 && m < grid.length && n < grid[0].length) {
                        if (grid[m][n] === 1) {
                            queue.push([m , n]);
                            grid[m][n] = 0;
                        }
                    }
                }
            }
        }
        return count;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                res = Math.max(bfs([i, j]), res);
            }
        }
    }
    return res;
};

maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]);