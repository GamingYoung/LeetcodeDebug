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
 * @return {number[]}
 */
var findMode = function (root) {
    let res = []
    let num = 0
    let cur = 100001
    let curNum = -1
    const inOrder = function (node) {
        if (node) {
            inOrder(node.left)
            if (node.val != cur) {
                if (curNum > num) {
                    res = [cur]
                    num = curNum
                } else if (curNum == num) res.push(cur)
                cur = node.val
                curNum = 1
            } else {
                curNum++
            }
            inOrder(node.right)
        }
    }
    inOrder(root)
    return res
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

findMode(new TreeNode(1, null, new TreeNode(2, new TreeNode(2), null))) // [2]