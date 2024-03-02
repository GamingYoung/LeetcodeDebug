/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    const visit = new Set()
    const restrict = new Set();
    for (let i = 0; i < restricted.length; i++) {
        restrict.add(restricted[i]);
    }
    const adjacency = new Array(n).fill(0).map(x => []);
    for (let j = 0; j < edges.length; j++) {
        if (restrict.has(edges[j][0]) || restrict.has(edges[j][1])) continue;
        adjacency[edges[j][0]].push(edges[j][1]);
        adjacency[edges[j][1]].push(edges[j][0]);
    }
    const dfs = function (node) {
        for (let i = 0; i < adjacency[node].length; i++) {
            if (visit.has(adjacency[node][i])) continue;
            visit.add(adjacency[node][i]);
            dfs(adjacency[node][i]);
        }
    }
    dfs(0);
    return visit.size;
};

reachableNodes(7, [[0, 1], [0, 2], [0, 5], [0, 4], [3, 2], [6, 5]], [4, 2, 1])