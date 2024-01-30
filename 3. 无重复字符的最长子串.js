/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = new Array(26).fill(0);
    let rear = 0;
    let front = 1;
    const base = 'a'.charCodeAt(0);
    let max = 1;
    hash[s[0].charCodeAt(0) - base] = 1;
    for (; front < s.length; front++) {
        if(!hash[s[front].charCodeAt(0) - base]) {
            max = Math.max(front - rear, max);
            hash[s[front].charCodeAt(0) - base] = 1;
        } else {
            for (; rear < front; rear++) {
                const temp = s[front];
                if (s[rear] === temp) {
                    hash[temp.charCodeAt(0) - base] = 0;
                    rear += 1;
                    break;
                }
            }
        }
    }
    return max + 1; 
};

lengthOfLongestSubstring("pwwkew");