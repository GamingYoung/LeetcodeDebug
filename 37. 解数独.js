/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let temp = flase
    const backTracking = function (i, j) {
        if (i == 9) temp = true
        if (board[i][j] != '.') {
            if (j == 8)
                backTracking(i + 1, 0)
            else backTracking(i, j + 1)
        } else {
            for (let k = 1; k <= 9; k++) {
                let flag = true
                // 横判断
                for (let m = 0; m < 9; m++) {
                    if (board[i][m] == String(k)) {
                        flag = false
                        break
                    }
                }
                if (!flag) continue
                // 竖判断
                for (let m = 0; m < 9; m++) {
                    if (board[m][j] == String(k)) {
                        flag = false
                        break
                    }
                }
                if (!flag) continue
                // 表格判断
                let tablex = Math.floor(i / 3)
                let tabley = Math.floor(j / 3)
                orter: for (let u = 0; u < 3; u++) {
                    for (let v = 0; v < 3; v++) {
                        if (board[tablex * 3 + u][tabley * 3 + v] == String(k)) {
                            flag = false
                            break orter
                        }
                    }
                }
                if (!flag) continue
                board[i][j] = `${k}`
                if (j == 8) backTracking(i + 1, 0)
                else backTracking(i, j + 1)
                if (temp) return
                board[i][j] = '.'
            }
        }

    }
    backTracking(0, 0)
};

solveSudoku([["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6",".","7","9"]])