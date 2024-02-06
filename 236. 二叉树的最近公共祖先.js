/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res;
    const postOrder = function (node, p, q) {
        if (!node) return 0;
        const left = postOrder(node.left, p, q);
        const right = postOrder(node.right, p, q);
        if ((node.val === p.val || node.val === q.val) && (left || right)) {
            res = node;
        }      
        else if (left === 1 && right === 1) {
            res = node;
        }
        // if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) {
        //     res = node;
        // } 
        return left || right || (node.val === p.val || node.val === q.val);
    }
    postOrder(root, p, q);
    return res;
};