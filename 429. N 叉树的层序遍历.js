/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) return res;
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        const path = [];
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            path.push(node.val);
            for (let j = 0; j < node.children.length; j++) {
                queue.push(node.children[j]);
            }
        }
        res.push([...path]);
    }
    return res;
};

