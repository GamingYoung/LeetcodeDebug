var numberOfSpecialChars = function (word) {
    // 无：0，大写：1，小写：2，全部：3
    let hash = new Array(26).fill(0)
    let low = 'a'.charCodeAt(0)
    let up = 'A'.charCodeAt(0)
    let res = 0
    for (let i = 0; i < word.length; i++) {
        let temp = word[i].charCodeAt(0)
        if (temp >= up && temp < low) {
            if (hash[temp - up] === 2) {
                hash[temp - up] = 3
                res++
            } else if (hash[temp - up] === 0) {
                hash[temp - up] = 1
            }
        } else {
            if (hash[temp - low] === 1) {
                hash[temp - low] = 3
                res++
            } else if (hash[temp - low] === 0) {
                hash[temp - low] = 2
            }
        }
    }
    return res
};

console.log(numberOfSpecialChars("aaAbcBC"))