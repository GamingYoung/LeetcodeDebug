/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    const res = []
    const postOrder = function(node) {
        for (let i = 0; i < node.children.length; i++) postOrder(node.children[i])
        res.push(node.val)
    }
    postOrder(root)
    return res
};