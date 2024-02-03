/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const minLength = Math.min(len1, len2);
    const res = [];
    let flag = 0;
    for (let i = 0; i < minLength; i++) {
        const cur = +num1[len1 - i - 1] + +num2[len2 - i - 1] + flag;
        res.push(cur % 10);
        if (cur  < 10) flag = 0;
        else flag = 1;
    }
    if (len1 > len2) {
        for (let i = minLength; i < len1; i++) {
            if (i === minLength) res.push(+num1[len1 - i - 1] + flag);
            else res.push(num1[len1 - i - 1]);
        }
    } else if (len1 < len2) {
        for (let i = minLength; i < len2; i++) {
            if (i === minLength) res.push(+num2[len2 - i - 1] + flag);
            else res.push(num1[len2 - i]);
        }
    } else if (flag === 1) res.push(1);
    return res.reverse().join('');
};

addStrings("12", "123")