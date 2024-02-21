/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(x + y)
        } else if (tokens[i] === '-') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(y - x)
        } else if (tokens[i] === '*') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(x * y)
        } else if (tokens[i] === '/') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(Math.floor(y / x))
        } else stack.push(Number(tokens[i]))
    }
    return stack.pop()
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) // 22