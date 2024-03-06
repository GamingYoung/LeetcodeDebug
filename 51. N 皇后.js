/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const board = new Array(n).fill(0).map(x => new Array(n).fill('.'))
    const res = []
    const backTracking = function (count) {
        if (count == n) {
            const path = []
            for (let i = 0; i < n; i++) {
                path.push(board[i].join(''))
            }
            res.push([...path])
            return
        }
        outer: for (let i = 0; i < n; i++) {
            let flag = true
            // 判断竖
            for (let j = count - 1; j >= 0; j--) {
                if (board[j][i] == 'Q') {
                    flag = false
                    break
                }
            }
            if (!flag) continue
            // 判断左斜
            for (let j = count - 1; j >= 0 && i - count + j >= 0; j--) {
                if (board[j][i - count + j] == 'Q') {
                    flag = false
                    break
                }
            }
            if (!flag) continue
            // 判断右斜
            for (let j = count - 1; j >= 0 && i + count - j < n; j--) {
                if (board[j][i + count - j] == 'Q') {
                    flag = false
                    break
                }
            }
            if (!flag) continue
            board[count][i] = 'Q'
            backTracking(count + 1)
            board[count][i] = '.'
        }
    }
    backTracking(0)
    return res
};

solveNQueens(4)