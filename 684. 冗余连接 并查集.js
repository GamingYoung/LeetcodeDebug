/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const un = new Array(edges.length + 1).fill(-1);
    let res;
    const find = function(un, x) {
        if (un[x] === -1) {
            return x;
        }
        return find(un, un[x]);
    }
    for (let i = 0; i < edges.length; i++) {
        let x_parent = find(un, edges[i][0]);
        let y_parent = find(un, edges[i][1]);
        if (x_parent !== y_parent) {
            un[x_parent] = y_parent;
        } else {
            res = edges[i];
        }
    }
    return res;
};