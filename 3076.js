/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
    const answer = []
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        for (let j = 1; j <= str.length; j++) {
            for (let k = 0; k + j <= str.length; k++) {
                let s = str.slice(k, k + j)
                let flag = true
                for (let u = 0; u < arr.length; u++) {
                    if (u === i) continue;
                    if (arr[u].includes(s)) {
                        flag = false
                        break;
                    }
                }
                if (flag) {
                    if (answer.length === i) answer.push(s)
                    else if (s < answer[i]) answer[i] = s
                }
            }
            if (answer.length === i + 1) break
        }
        if (answer.length === i) answer.push('')
    }
    return answer
};