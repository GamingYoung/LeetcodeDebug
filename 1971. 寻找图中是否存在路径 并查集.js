


var validPath = function(n, edges, source, destination) {
    const union = new Array(n).fill(-1);
    for (let i = 0; i < edges.length; i++) {
        let x_parent = find(union, edges[i][0]);
        let y_parent = find(union, edges[i][1]);
        if (x_parent !== y_parent) {
            union[x_parent] = y_parent;
        }
    }
    const find = function(union, x) {
        if (union[x] === -1) {
            return x;
        }
        return find(union, union[x]);
    }
    return find(union, source) === find(union, destination);
}

validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)