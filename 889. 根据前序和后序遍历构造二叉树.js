/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    const len = preorder.length
    if (!len) return null
    const node = new TreeNode(preorder[0], null, null)
    if (len > 1) {
      let i = 0
      // 可以使用indexOf替代，语法是：
      // const i = postorder(preorder[1], 0)
      while (postorder[i] != preorder[1]) i++
      node.left = constructFromPrePost(preorder.slice(1, i + 2), postorder.slice(0, i + 1))
      node.right = constructFromPrePost(preorder.slice(i + 2, len), postorder.slice(i + 1, len - 1))
    }
    return node
  };