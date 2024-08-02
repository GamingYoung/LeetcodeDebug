var rotate = function(nums, k) {
    function swap (start, end) {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    swap(0, nums.length - k - 1)
    console.log(nums)
    swap(nums.length - k, nums.length - 1)
    console.log(nums)
    swap(0, nums.length - 1)
    return nums
};



console.log(rotate([1,2,3,4,5,6,7],3))
// rotate([1,2,3,4,5,6,7],3)