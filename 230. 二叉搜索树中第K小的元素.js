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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans

    const dfs = (node) => {
        if (node == null) {
            return
        }

        dfs(node.left)
        // if (k === 0) return
        if (--k === 0) ans = node.val
        dfs(node.right)
    }

    dfs(root)

    return ans
};