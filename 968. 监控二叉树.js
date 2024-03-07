var minCameraCover = function (root) {
    let res = 0
    const postOrder = function (node) {
        if (node.left && node.right) {
            postOrder(node.left)
            postOrder(node.right)
            if (node.left.val == 0 || node.right.val == 0) {
                res += 1
                node.val = 2
            } else if (node.left.val == 1 || node.right.val == 1) {
                return
            } else {
                node.val = 1
            }
        } else if (node.left) {
            postOrder(node.left)
            if (node.left.val == 0) {
                res += 1
                node.val = 2
            } else if (node.left.val == 1) {
                return
            } else {
                node.val = 1
            }
        } else if (node.right) {
            postOrder(node.right)
            if (node.right.val == 0) {
                res += 1
                node.val = 2
            } else if (node.right.val == 1) {
                return
            } else {
                node.val = 1
            }
        } else {
            return
        }
    }
    postOrder(root)
    if (root.val == 0) res++
    return res
};
minCameraCover()


