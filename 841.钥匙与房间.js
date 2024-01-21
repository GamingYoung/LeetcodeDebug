/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const isVisited = new Array(rooms.length).fill(0);
    const dfs = function(node) {
        isVisited[node] = 1;
        for (let i = 0; i < rooms[node].length; i++) {
            if (!isVisited[rooms[node][i]]) {
                dfs(rooms[node][i]);
            }
        }
    }
    dfs(0);
    for (let i = 0; i < isVisited.length; i++) {
        if (!isVisited[i]) return false;
    }
    return true;
};

canVisitAllRooms([[1],[2],[3],[]]);