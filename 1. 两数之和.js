/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // 暴力解法 O(n^2) O(1)
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
// };

// 哈希表解法，不算精简
var twoSum = function(nums, target) {
    const numTemp = [];
    for (let i = 0; i < nums.length; i++) {
        numTemp.push(nums[i]);
    }
    numTemp.sort((a, b) => a - b);
    let start = 0;
    let end = numTemp.length - 1;
    while(1) {
        if (numTemp[start] + numTemp[end] > target) end--;
        else if (numTemp[start] + numTemp[end] < target) start++;
        else break;
    }
    const res = [];
    let flag = 0;
    if (numTemp[start] === numTemp[end]) {
        let i = 0;
        while (flag != 2) {
            if (nums[i] === numTemp[start]) {
                res.push(i);
                flag += 1;
            }
            i++;
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === numTemp[start]) res.push(i);
            if (nums[i] === numTemp[end]) res.push(i);
        }
    }
    return res;
};

twoSum([2,7,11,15], 9)