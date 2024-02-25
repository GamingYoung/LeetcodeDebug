/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let res = 0
    for (let i = 0; i < bottomLeft.length - 1; i++) {
        for (let j = i + 1; j < bottomLeft.length; j++) {
            const x1 = bottomLeft[i][0]
            const x2 = topRight[i][0]
            const x3 = bottomLeft[j][0]
            const x4 = topRight[j][0]
            const y1 = bottomLeft[i][1]
            const y2 = topRight[i][1]
            const y3 = bottomLeft[j][1]
            const y4 = topRight[j][1]
            if (x2 <= x3 || y2 <= y3) continue
            else if (x4 <= x1 || y4 <= y1) continue
            else {
                const num1 = [x1, x2, x3, x4]
                num1.sort((a, b) => a - b)
                const num2 = [y1, y2, y3, y4]
                num2.sort((a, b) => a - b)
                let a = Math.min(num1[2] - num1[1], num2[2] - num1[1])
                res = Math.max(res, a * a)
            }
        }
    }
    return res
};

largestSquareArea([[1,1],[2,2],[1,2]], [[3,3],[4,4],[3,4]])