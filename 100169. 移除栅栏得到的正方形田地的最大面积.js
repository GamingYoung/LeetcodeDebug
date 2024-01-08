/*
 * @Author: GamingYoung zzzz7057@163.com
 * @Date: 2023-12-26 17:01:25
 * @LastEditors: GamingYoung zzzz7057@163.com
 * @LastEditTime: 2023-12-26 17:23:28
 * @FilePath: /leetcodeTest/100169. 移除栅栏得到的正方形田地的最大面积.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */

var maximizeSquareArea = function(m, n, hFences, vFences) {
    hFences.unshift(1);
    vFences.unshift(1);
    hFences.push(m);
    vFences.push(n);
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);
    for (let i = 1; i < hFences.length; i++) {
        hFences[i - 1] = hFences[i] - hFences[i - 1];
    }
    hFences.pop();
    for (let i = 1; i < vFences.length; i++) {
        vFences[i - 1] = vFences[i] - vFences[i - 1];
    }
    vFences.pop();

    const insert = function(nums, val) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === val) return;
            if (nums[mid] < val) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        nums.splice(left, 0, val);
    }

    const h = [];
    const v = [];
    for (let i = 0; i < hFences.length; i++) {
        let sum = 0;
        for (let j = i; j < hFences.length; j++) {
            sum += hFences[j];
            insert(h, sum);
        }
    }
    for (let i = 0; i < vFences.length; i++) {
        let sum = 0;
        for (let j = i; j < vFences.length; j++) {
            sum += vFences[j];
            insert(v, sum);
        }
    }

    h.sort((a, b) => a - b);
    v.sort((a, b) => a - b);

    let res = -1;
    let p = h.length - 1;
    let q = v.length - 1;
    for (let i = 0; i < h.length + v.length; i++) {
        if (v[q] === h[p]) {
            res = v[q];
            break;
        }
        if (v[q] < h[p]) p -= 1;
        else q -= 1;
    }
    return res === -1 ? -1 : (res * res) % 1000000007;
};
maximizeSquareArea(4, 3, [2, 3], [2]);