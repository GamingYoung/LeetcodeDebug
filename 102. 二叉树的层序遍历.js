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
var levelOrder = function(root) {
    if (!root) return [];

    const stack = [root];
    const res = [];

    while (stack.length) {
        let l = stack.length;

        for (let i = 0; i < l; i++) {
            const node = stack[i];
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        res.push(stack.slice(0, l).map(node => node.val));
        while(l) {
            stack.shift();
            l--;
        }
    }

    return res;
};