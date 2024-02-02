/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    let temp = 0;
    while (temp < arr1.length && temp < arr2.length) {
        if (Number(arr1[temp]) < Number(arr2[temp])) return -1;
        else if (Number(arr1[temp]) > Number(arr2[temp])) return 1;
        else temp += 1;
    }
    if (arr1.length > arr2.length) {
        for (let i = arr2.length; i < arr1.length; i++) {
            if (Number(arr1[i]) != 0) return 1;
        }
        return 0;
    } else if (arr1.length < arr2.length) {
        for (let i = arr1.length; i < arr2.length; i++) {
            if (Number(arr2[i]) != 0) return -1;
        }
        return 0;
    }
    else return 0;
};

compareVersion("1.01", "1.001");