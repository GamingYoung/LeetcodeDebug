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
var zigzagLevelOrder = function(root) {
    const res = [];
    if (!root) return res;
    let flag = 1;
    const queue = [root];
    while (queue.length) {
        const path = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            path.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        } 
        if (flag === 1) {
            res.push([...path]);
            flag = -1;
        } else {
            path.reverse();
            res.push([...path]);
            flag = 1;
        }
    }
    return res;
};