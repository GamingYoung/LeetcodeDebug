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
var countNodes = function (root) {
    if (root === null) return 0;

    let left = root.left;
    let right = root.right;
    let leftDepth = 0, rightDepth = 0;
    while (left) {
        left = left.left;
        leftDepth++;
    }
    while (right) {
        right = right.right;
        rightDepth++;
    }
    if (leftDepth == rightDepth) {
        return Math.pow(2, leftDepth + 1) - 1;
    }

    // 后续遍历
    let leftNum = countNodes(root.left);
    let rightNum = countNodes(root.right);
    return leftNum + rightNum + 1;
};
