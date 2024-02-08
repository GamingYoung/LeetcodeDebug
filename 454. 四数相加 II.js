/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map1 = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const num = nums1[i] + nums2[j];
            if (map1.has(num)) map1.set(num, map1.get(num) + 1);
            else map1.set(num, 1);
        }
    }
    let res = 0;
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const num = nums3[i] + nums4[j];
            if (map1.has(num)) res += map1.get(num);
        }
    }
    return res;
};

fourSumCount([-1,1,1,1,-1], [0,-1,-1,0,1], [-1,-1,1,-1,-1], [0,1,0,-1,-1]);