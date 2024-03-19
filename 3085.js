/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const map = new Map()
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    const arr = []
    map.forEach((value, key) => {
        arr.push(value)
    })
    if (arr.length == 1) return 0
    arr.sort((a, b) => a - b)
    let ans = +Infinity
    for (const least of arr) {
        const count = least + k
        ans = Math.min(ans, arr.reduce((acc, cur) => {
        if (cur > count) {
            return acc + cur - count
        } else if (cur < count) {
            return acc + cur
        } else {
            return acc
        }
    }, 0))
    }
    return ans
};

minimumDeletions("dabdcbdcdcd", 2) // 2