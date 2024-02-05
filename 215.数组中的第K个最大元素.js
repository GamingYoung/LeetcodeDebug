/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const quickSelect = (l, r, k) => {
        if (l === r) return nums[k];
        let x = nums[l], i = l - 1, j = r + 1;
        while (i < j) {
            do i++; while (nums[i] < x);
            do j--; while (nums[j] > x);
            if (i < j) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        if (k <= j) return quickSelect(l, j, k);
        else return quickSelect(j + 1, r, k);
    }
    const n = nums.length;
    return quickSelect(0, n - 1, n - k);
};