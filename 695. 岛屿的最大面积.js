/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let res = 0;
    const bfs = function(i, j) {
        let area = 0;
        const queue = [[i, j]];
        while (queue.length != 0) {
            const pos = queue.shift();
            for (let k = 0; k < dir.length; k++) {
                const nextX = pos[0] + dir[k][0];
                const nextY = pos[1] + dir[k][1];
                if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) continue;
                if (grid[nextX][nextY] === 1) {
                    queue.push([nextX, nextY]);
                    grid[nextX][nextY] = 0;
                    area += 1;
                }
            }
        }
        return area === 0 ? 1 : area;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let temp = bfs(i, j);
                res = res > temp ? res : temp;
            }
        }
    }
    return res;
};

maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]);