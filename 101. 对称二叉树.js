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
var isSymmetric = function(root) {
    // 复杂递归写法
    const order = function(left, right) {
        let l = false;
        let r = false;
        if (left.left && right.right) l = order(left.left, right.right);
        else if (!left.left && !right.right) l = true;
        if (left.right && right.left) r = order(left.right, right.left);
        else if (!left.right && !right.left) r = true;
        if (left.val === right.val && l && r) return true;
        else return false;
    }
    return order(root, root);
};

