// sort -> return first array element(0)
const min = array => !array || !array.length ? 0 : array.sort((a, b) => a - b)[0];


// sort -> return last array element(array.length - 1)
const max = array => !array || !array.length ? 0 : array.sort((a, b) => a - b)[array.length - 1];


// reduce -> return
const avg = array => !array || !array.length ? 0 : array.reduce((acc, curr) => acc + curr, 0) / array.length;


exports.min = min;
exports.max = max;
exports.avg = avg;