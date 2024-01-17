/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    wordList.push(endWord);
    const neibor = new Array(wordList.length).fill(0).map(() => new Array(wordList.length).fill(0));
    for (let i = 0; i < wordList.length; i++) {
        
    }
};