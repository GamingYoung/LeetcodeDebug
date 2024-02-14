/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const sArr = s.split('');
    const res = [];
    const path = [];
    const findIP = function(start) {
        if (path.length === 4) {
            if (start === sArr.length) {
                res.push(path.join('.'));
            }
            return;
        }
        let k = 3;
        if (sArr[start] === '0') k = 1;
        let temp = 0;
        for (let i = 0; i < k; i++) {
            temp = temp * 10 + Number(sArr[i + start]);
            if (temp > 255) return;
            path.push(temp);
            findIP(i + 1 + start);
            path.pop();
        }
    }
    findIP(0);
    return res;
};

restoreIpAddresses("25525511135");