/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function(s) {
    const base = 'a'.charCodeAt()
    let map = []
    for (let i = 0; i < 26; i++) {
        map.push([base + i, 0])
    }
    let pos = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '?') map[s[i].charCodeAt() - base][1]++
        else pos.push(i)
    }
    map.sort((a, b) => {
        if (a[1] == b[1]) return a[0] - b[0]
        return a[1] - b[1]
    })
    let arr = s.split('')
    let res = []
    for (let i = 0; i < pos.length; i++) {
        // arr[pos[i]] = String.fromCharCode(map[0][0])
        res.push(String.fromCharCode(map[0][0]))
        map[0][1]++
        map.sort((a, b) => {
            if (a[1] == b[1]) return a[0] - b[0]
            return a[1] - b[1]
        })
        // 插入排序
        // for (let j = 1; j < map.length; j++) {
        //     if (map[j][1] <= map[j - 1][1]) {
        //         let temp = map[j - 1]
        //         map[j - 1] = map[j]
        //         map[j] = temp
        //     } else if (map[j][0] < map[j - 1][0]) {
        //         let temp = map[j - 1]
        //         map[j - 1] = map[j]
        //         map[j] = temp
        //     } else break
        // }
    }
    res.sort()
    for (let i = 0; i < pos.length; i++) {
        arr[pos[i]] = res[i]
    }
    return arr.join('')
};

minimizeStringValue("fd????c?mkhfk?to?l??fgzkkup???qtia") // "abywaipkja"