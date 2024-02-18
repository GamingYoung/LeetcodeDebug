/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const res = []
    const preOrder = function (node) {
        res.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            preOrder(node.children[i])
        }
    }
    preOrder(root)
    return res
};