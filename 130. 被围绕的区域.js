/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const m = board.length;
    const n = board[0].length;
    const queue = [];
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') queue.push([i, 0]);
        if (board[i][n - 1] === 'O') queue.push([i, n - 1]);
    }
    for (let i = 1; i < n - 1; i++) {
        if (board[0][i] === 'O') queue.push([0, i]);
        if (board[m - 1][i] === 'O') queue.push([m - 1, i]);
    }
    while (queue.length != 0) {
        const pos = queue.pop();
        if (board[pos[0]][pos[1]] === 'T') continue;
        board[pos[0]][pos[1]] = 'T';
        for (let i = 0; i < dir.length; i++) {
            const newPos = [pos[0] + dir[i][0], pos[1] + dir[i][1]];
            // const newPos = pos + dir[i];
            if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= m || newPos[1] >= n) continue;
            if (board[newPos[0]][newPos[1]] === 'O') {
                queue.push(newPos);
            }
        } 
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            if (board[i][j] === 'T') board[i][j] = 'O';
        }
    }
    for (let i = 0; i < 3; i++);
};

solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]);