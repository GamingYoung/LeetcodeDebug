const a = function(m) {
    let arr = []
    // 1,11
    let str1_11 = ''
    for (let i = 0; i < m * 11; i++) {
        str1_11 += '.'
    }
    // 2,4,6,8
    let str2_4_6_8 = ''
    for (let i = 0; i < m * 2; i++) {
        str2_4_6_8 += '.'
    }
    for (let i = 0; i < m * 7; i++) {
        str2_4_6_8 += '*'
    }
    for (let i = 0; i < m * 2; i++) {
        str2_4_6_8 += '.'
    }
    // 3,5,7,9
    let str3_5_7_9 = ''
    for (let i = 0; i < m * 2; i++) {
        str3_5_7_9 += '.'
    }
    for (let i = 0; i < m; i++) {
        str3_5_7_9 += '*'
    }
    for (let i = 0; i < m * 2; i++) {
        str3_5_7_9 += '.'
    }
    for (let i = 0; i < m; i++) {
        str3_5_7_9 += '*'
    }
    for (let i = 0; i < m * 2; i++) {
        str3_5_7_9 += '.'
    }
    for (let i = 0; i < m; i++) {
        str3_5_7_9 += '*'
    }
    for (let i = 0; i < m * 2; i++) {
        str3_5_7_9 += '.'
    }
    // 10
    let str_10 = ''
    for (let i = 0; i < m; i++) {
        str_10 += '.'
    }
    for (let i = 0; i < m * 9; i++) {
        str_10 += '*'
    }
    for (let i = 0; i < m; i++) {
        str_10 += '.'
    }
    // 合成
    for (let i = 0; i < m; i++) {
        arr.push(str1_11)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str2_4_6_8)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str3_5_7_9)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str2_4_6_8)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str3_5_7_9)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str2_4_6_8)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str3_5_7_9)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str2_4_6_8)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str3_5_7_9)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str_10)
    }
    for (let i = 0; i < m; i++) {
        arr.push(str1_11)
    }
    return arr
}

console.log(a(1))