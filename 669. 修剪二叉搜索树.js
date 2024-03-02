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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    const postOrder = function (node) {
        if (!node) return null;
        const left = postOrder(node.left);
        const right = postOrder(node.right);
        if (node.val <= high && node.val >= low) return node;
        if (left) return left;
        if (right) return right;
        return null;
    }
    return postOrder(root)
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

trimBST(new TreeNode(3, null, null), 1, 2)