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
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0;
    const dfs = function(node, val) {
        val = val * 10 + node.val;
        if (!node.left && !node.right) res += val;
        if (node.left) dfs(node.left, val);
        if (node.right) dfs(node.right, val);
    }
    dfs(root, 0);
    return res;
};