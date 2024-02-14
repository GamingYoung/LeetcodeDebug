/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    // 先遍历后排序
    const cur = [];
    const inOrder = function(node, row, col) {
        cur.push([node.val, row, col]);
        if (node.left) inOrder(node.left, row + 1, col - 1);
        if (node.right) inOrder(node.right, row + 1, col + 1);
    }
    inOrder(root, 0, 0);
    cur.sort((a, b) => {
        if (a[2] === b[2]) {
            if (a[1] === b[1]) {
                return a[0] - b[0];
            } else {
                return a[1] - b[1];
            }            
        } else {
            return a[2] - b[2];
        }
    })
    const res = [];
    let path = [cur[0][0]];
    for (let i = 1; i < cur.length; i++) {
        if (cur[i][2] === cur[i - 1][2]) path.push(cur[i][0]);
        else {
            res.push([...path]);
            path = [cur[i][0]];
        }
    }
    res.push(...[path]);
    return res;
};