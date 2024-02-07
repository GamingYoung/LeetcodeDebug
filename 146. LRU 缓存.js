/**
 * @param {number} capacity
 */

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function (capacity) {
    // 初始化容量
    this.capacity = capacity;
    // 初始化头尾节点
    this.vNode = new Node(0, 0);
    this.vNode.next = this.vNode;
    this.vNode.prev = this.vNode;
    // 初始化Map
    this.map = new Map();
    // 删除节点方法：
    this.remove = function (node) {
        let temp1 = node.prev
        let temp2 = node.next
        temp1.next = temp2
        temp2.prev = temp1
    }
    // 放置顶端方法
    this.placeFirst = (node) => {
        let tmp1 = this.vNode.next;
        node.next = tmp1;
        node.prev = this.vNode;
        tmp1.prev = node;
        this.vNode.next = node;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.map.get(key);
    if(!node) return -1;
    this.remove(node);
    this.placeFirst(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果放入的本身存在
    const node = this.map.get(key);
    if (node) {
        node.val = value;
        // 删除这个节点
        this.remove(node);
        // 将这个节点放在开头
        this.placeFirst(node);
        return;
    } else {
        const newNode = new Node(key,value);
        this.map.set(key, newNode);
        this.placeFirst(newNode);
    }
    if(this.map.size > this.capacity){
        const backNode = this.vNode.prev;
        this.remove(backNode);
        this.map.delete(backNode.key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */