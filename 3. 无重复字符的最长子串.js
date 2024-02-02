/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = new Array(26).fill(0);
    let front = 0;
    let rear = 0;
    let max = 0;
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const temp = hash[s[i].charCodeAt(0) - base];
        if (temp === 0) {

            hash[s[i].charCodeAt(0) - base] = 1;
        } else {
            while (hash[s[rear].charCodeAt(0) - base] != temp) {
                hash[s[rear].charCodeAt(0) - base] = 0;
                rear ++;
                
            }
            rear ++;
        }
        front += 1;
        max = Math.max(max, front - rear);
    }
    return max + 1;
};

lengthOfLongestSubstring("pwwkew");