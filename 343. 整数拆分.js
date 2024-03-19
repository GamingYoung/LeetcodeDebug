/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n < 4) {
      const res = [0, 0, 1, 2]
      return res[n]
    }
    let k = n / 3
    if (n % 3 === 1) {
      return Math.pow(3, k - 1) * 4
    }
    if (n % 3 === 0) {
      return Math.pow(3, k)
    }
    if (n % 3 === 2) {
      return Math.pow(3, k) * 2
    }
  };

integerBreak(10)