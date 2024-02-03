/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
        else {
            const charc = stack.pop();
            if (s[i] === ')' && charc != '(') return false;
            else if (s[i] === ']' && charc != '[') return false;
            else if (s[i] === '}' && charc != '{') return false;
        }
    }
    if (!stack.length) return true;
    return false;
};

isValid("()[]{}")