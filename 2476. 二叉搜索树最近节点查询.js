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
 * @param {number[]} queries
 * @return {number[][]}
 */

const testCal = function() {
    const nodeVal = [6, 9,12, 13,14,20]
    const queries = [6, 6, 9, 10, 10, 13, 17, 19, 19, 19]
    const res = new Array(queries.length).fill().map(x => new Array(2).fill(-1))
    const map = new Map()
    for (let i = 0; i < queries.length; i++) {
      map.set(queries[i], i)
    }
    queries.sort((a, b) => a - b)
    let start = 0
    let end = 0
    for (let i = 0; i < queries.length; i++) {
      while(nodeVal[start] <= queries[i]) {
        start++
      }
      res[map.get(queries[i])][0] = start > 0 ? nodeVal[start - 1] : -1
      while(nodeVal[end] < queries[i]) {
        end++
      }
      res[map.get(queries[i])][1] = end < nodeVal.length ? nodeVal[end] : -1
    }
  
    return res
}
testCal()
var closestNodes = function(root, queries) {
    const answ1r = new Array(queries.length).fill(0).map(x => new Array(2).fill(-1))
  
    const inOrder = function(node, i, val) {
      if (!node) return
      if (node.val === val) {
        answ1r[i][0] = val
        answ1r[i][1] = val
      } else if (node.val < val) {
        answ1r[i][0] = Math.max(answ1r[i][0], node.val)
        inOrder(node.left, i, val)
      } else {
        answ1r[i][1] = Math.min(answ1r[i][1], node.val)
        inOrder(node.right, i, val)
      }
    }
  
    for (let i = 0; i < queries; i++) {
      inOrder(root, i, queries[i])
    }
  
    return answ1r
  };

