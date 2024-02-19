/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 计算next数组
    const next = new Array(needle.length).fill(0)
    let i = 1
    // 这里很精髓，应为其实是循环套判断套循环，所以两个循环可以2合1，然后就不用for而是用while，算是很经典的写法，使用一个变量暂时存放i
    let len = 0 
    while (i < next.length) {
        if (needle[i] === needle[len]) {
            len += 1
            next[i] = len
            i += 1
        } else {
            if (len === 0) {
                next[i] = len
                i += 1
            } else {
                len = next[len - 1]
            }
        }
    }
    next.unshift(-1)
    next.pop()
    // 匹配
    let pre = 0
    let post = 0
    while (pre <= haystack.length - needle.length) {
        if (haystack[pre] === needle[post]) {
            if (post === needle.length - 1) return pre - needle.length + 1
            else {
                post ++
                pre  ++
            }
        } else {
            post = next[post]
        }
    }
    return -1
};

strStr("mississippi", "issip") // 4