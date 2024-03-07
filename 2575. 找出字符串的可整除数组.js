/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
    const division = new Array(word.length).fill(0)
    let cur = +word[0]
    let temp = 0
    if (cur % m == 0) {
        division[0] = 1
        temp = 1
    }
    for (let i = 1; i < division.length; i++) {
        const cur = +word.slice(temp, i + 1)
        if (cur % m == 0) {
            division[i] = 1
            temp = i + 1
        }
    }
    return division
};

divisibilityArray("91221181269244172125025075166510211202115152121212341281327", 21)