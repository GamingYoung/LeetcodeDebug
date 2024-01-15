/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const dpToPacific = new Array(heights.length).fill(0).map(x => new Array(heights[0].length).fill(0));
    const dpToAtlantic = new Array(heights.length).fill(0).map(x => new Array(heights[0].length).fill(0));
    for (let i = 0; i < heights.length; i++) {
        dpToPacific[0][i] = 1;
        dpToPacific[i][0] = 1;
    }
    for (let i = 1; i < dpToPacific.length; i++) {
        for (let j = 1; j < dpToPacific[0].length; j++) {
            if (heights[i][j] >= heights[i - 1][j] && dpToPacific[i - 1][j] === 1) dpToPacific[i][j] = 1;
            if (heights[i][j] >= heights[i][j - 1] && dpToPacific[i][j - 1] === 1) dpToPacific[i][j] = 1;
        }
    }
    for (let i = 0; i < heights.length; i++) {
        dpToAtlantic[heights.length - 1][i] = 1;
        dpToAtlantic[i][heights[0].length - 1] = 1;
    }
    for (let i = dpToAtlantic.length - 2; i >= 0; i--) {
        for (let j = dpToAtlantic[0].length - 2; j >= 0; j--) {
            if (heights[i][j] >= heights[i + 1][j] && dpToAtlantic[i + 1][j] === 1) dpToAtlantic[i][j] = 1;
            if (heights[i][j] >= heights[i][j + 1] && dpToAtlantic[i][j + 1] === 1) dpToAtlantic[i][j] = 1;
        }
    }
    const res = [];
    for (let i = 0; i < dpToAtlantic.length; i++) {
        for (let j = 0; j < dpToAtlantic[0].length; j++) {
            if (dpToAtlantic[i][j] === 1 && dpToPacific[i][j] === 1) res.push([i, j]);
        }
    }
    return res;
};

pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]);