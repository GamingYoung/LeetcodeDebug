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
 * @return {boolean}
 */
let pre = -Infinity
var isValidBST = function (root) {
    if (!root) return 1
    let i = isValidBST(root.left)
    if (i === 0) return i
    if (root.val < pre) return 0
    else pre = root.val
    i = isValidBST(root.right)
    return i
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let j = isValidBST(new TreeNode(0, null, null))

console.log(j) // true