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
var maxPathSum = function(root) {
    let res = -Infinity
    const postOrder = function(node) {
        if (!node) return 0
        let left = postOrder(node.left)
        let right = postOrder(node.right)
        left = left < 0 ? 0 : left
        right = right < 0 ? 0 : right
        res = Math.max(res, node.val + left + right)
        return Math.max(left, right) + node.val
    }
    postOrder(root)
    return res
}