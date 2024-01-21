/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                if (i === 0) res += 1;
                else if (grid[i - 1][j] === 0) res += 1;

                if (i === grid.length - 1) res += 1;
                else if (grid[i + 1][j] === 0) res += 1;

                if (j === 0) res += 1;
                else if (grid[i][j - 1] === 0) res += 1;

                if (j === grid[0].length - 1) res += 1;
                else if (grid[i][j + 1] === 0) res += 1;
            }
        }
    }
    return res;
}

islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]);