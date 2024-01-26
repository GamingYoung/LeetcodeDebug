/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const N = 1010; // 如题：二维数组大小的在3到1000范围内
const father = new Array(N);
let n; // 边的数量

// 并查集里寻根的过程
const find = u => {
    return u == father[u] ? u : father[u] = find(father[u]);
};

// 将v->u 这条边加入并查集
const join = (u, v) => {
    u = find(u);
    v = find(v);
    if(u == v) return;
    father[v] = u;
};

// 判断 u 和 v是否找到同一个根
const same = (u, v) => {
    u = find(u);
    v = find(v);
    return u == v;
};

// 在有向图里找到删除的那条边，使其变成树
const getRemoveEdge = edges => {
    // 初始化并查集
    for (let i = 1; i <= n; i++) {
        father[i] = i;
    }
    for (let i = 0; i < n; i++) { // 遍历所有的边
        if (same(edges[i][0], edges[i][1])) { // 构成有向环了，就是要删除的边
            return edges[i];
        }
        join(edges[i][0], edges[i][1]);
    }
    return [];
}

// 删一条边之后判断是不是树
const isTreeAfterRemoveEdge = (edges, deleteEdge) => {
    // 初始化并查集
    for (let i = 1; i <= n; i++) {
        father[i] = i;
    }
    for (let i = 0; i < n; i++) {
        if (i == deleteEdge) continue;
        if (same(edges[i][0], edges[i][1])) { // 构成有向环了，一定不是树
            return false;
        }
        join(edges[i][0], edges[i][1]);
    }
    return true;
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    n = edges.length;// 边的数量
    const inDegree = new Array(n+1).fill(0); // 记录节点入度
    for (let i = 0; i < n; i++) {
        inDegree[edges[i][1]]++; // 统计入度
    }
    let vec = [];// 记录入度为2的边（如果有的话就两条边）
    // 找入度为2的节点所对应的边，注意要倒序，因为优先返回最后出现在二维数组中的答案
    for (let i = n - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] == 2) {
            vec.push(i);
        }
    }
    // 处理图中情况1 和 情况2
    // 如果有入度为2的节点，那么一定是两条边里删一个，看删哪个可以构成树
    if (vec.length > 0) {
        if (isTreeAfterRemoveEdge(edges, vec[0])) {
            return edges[vec[0]];
        } else {
            return edges[vec[1]];
        }
    }
    // 处理图中情况3
    // 明确没有入度为2的情况，那么一定有有向环，找到构成环的边返回就可以了
    return getRemoveEdge(edges);
};