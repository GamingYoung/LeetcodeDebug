/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp =  s.trim().split(' ').reverse().filter(item => item !== '').join(' ')
    return temp
};

reverseWords("a good   example") // "example good a"