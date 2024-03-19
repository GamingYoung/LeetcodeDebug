/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let n = nums.length;
    let total = 0, total2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
        } else {
            total += nums[i];
        }
        total2 += Math.abs(nums[i]);
    }

    nums.sort((a, b) => a - b);
    const dfs = (i, t, limit) => {
        if (i === n || cnt >= k - 1 || t + nums[i] > limit) {
            return;
        }
        cnt++;
        dfs(i + 1, t + nums[i], limit, cnt);
        dfs(i + 1, t, limit, cnt);
    };

    let left = 0, right = total2;
    let cnt = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        cnt = 0;
        dfs(0, 0, mid);
        if (cnt >= k - 1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return total - left;
};

// Local test
kSum([1,-2,3,4,-10,12], 10)