/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let pre = head;
    for (let i = 0; i < cnt; i++) pre = pre.next;
    while (pre) {
        head = head.next;
        pre = pre.next;
    }
    return head;
}