/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let sr = s.split("").reverse().join("");
    for (let i = 0; i < s.length - 1; i++) {
        const temp = sr.slice(i, i + 2)
        if (s.includes(temp)) return temp
    }
    return false
};

isSubstringPresent('leetcode')