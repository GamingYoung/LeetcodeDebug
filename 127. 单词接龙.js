/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // 将wordList转成Set，提高查询速度
    const wordSet = new Set(wordList);
    // Set元素个数为0 或者 endWord没有在wordSet出现，直接返回0
    if (wordSet.size === 0 || !wordSet.has(endWord)) return 0;
    // 记录word是否访问过
    const visitMap = new Map();// <word, 查询到这个word路径长度>
    // 初始化队列
    const queue = [];
    queue.push(beginWord);
    // 初始化visitMap
    visitMap.set(beginWord, 1);
    
    while(queue.length !== 0){
        let word = queue.shift(); // 删除队首元素,将它的值存放在word
        let path = visitMap.get(word); // 这个word的路径长度
        for(let i = 0; i < word.length; i++){ // 遍历单词的每个字符
            for (let c = 97; c <= 122; c++) { // 对应26个字母ASCII值 从'a' 到 'z' 遍历替换
                // 拼串得到新的字符串
                let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if(newWord === endWord) return path + 1; // 找到了end，返回path+1
                // wordSet出现了newWord，并且newWord没有被访问过
                if(wordSet.has(newWord) && !visitMap.has(newWord)) {
                    // 添加访问信息
                    visitMap.set(newWord, path + 1);
                    queue.push(newWord);
                }
            }
        }
    }
    return 0;
};