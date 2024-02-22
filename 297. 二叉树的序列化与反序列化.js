

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var serialize = function (root) {
    if (!root) return ''
    const res = []
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (!node) res.push('n')
        else {
            queue.push(node.left)
            queue.push(node.right)
            res.push(node.val)
        }
    }
    return res.join('.')
};

var deserialize = function (data) {
    if (data === '') return null
    const arr = data.split('.')
    let nullCount = 0
    const build = function (n) {
        if (n >= arr.length) return null
        if (arr[n] === 'n') {
            nullCount++
            return null
        }
        const node = new TreeNode(Number(arr[n]), null, null)
        node.left = build(2 * n + 1 + nullCount)
        node.right = build(2 * n + 2 + nullCount)
        return node
    }
    return build(0)
};
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
deserialize(serialize(root))