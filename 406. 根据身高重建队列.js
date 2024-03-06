/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (a[1] == b[1]) return a[0] - b[0]
        return a[1] - b[1]
    })
    const res = [[...people[0]]]
    for (let i = 1; i < people.length; i++) {
        let k = people[i][1]
        let j = 0
        for (; j < i; j++) {
            if (k == 0&& res[j][0] >= people[i][0]) break
            if (res[j][0] >= people[i][0]) k--
        }
        res.splice(j, 0, [...people[i]])
    }
    return res
};

reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]) 