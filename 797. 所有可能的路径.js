/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    const path = [0];
    const dfs = function(start) {
        if (path[path.length - 1] === graph.length - 1) {
            res.push([...path]);
        }
        for (let i = 0; i < graph[start].length; i++) {
            path.push(graph[start][i]);
            dfs(graph[start][i]);
            path.pop();
        }
    }
    dfs(0);
    return res;
};

allPathsSourceTarget([[1,2],[3],[3],[]])