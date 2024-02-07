/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function(nums) {
    const q = new MinPriorityQueue();
        let ans = 0;
        let hp = 1, delay = 0;
        for (const num of nums) {
            if (num < 0) {
                q.enqueue(num);
            }
            hp += num;
            if (hp <= 0) {
                ++ans;
                delay += q.front().element;
                hp -= q.front().element;
                q.dequeue();
            }
        }
        hp += delay;
        return hp <= 0 ? -1 : ans;
    };