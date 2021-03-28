const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i-1];
    const next = arr[i+1];
    if (arr[i] !== '--double-prev' && arr[i] !== '--double-next' && arr[i] !=='--discard-prev' && arr[i] !== '--discard-next') {
      result.push(arr[i])
    }
    if (prev === '--discard-next') {
      result.splice(result.length-1, 1);
    }
    if (next === '--discard-prev') {
      if (prev !== '--discard-next') {
        result.splice(result.length-1, 1);
      }
    }
    if (prev === '--double-next') {
      result.push(arr[i])
    }
    if (next === '--double-prev') {
      if (prev !== '--discard-next') {
        result.push(arr[i])
      }
    }
   }
  return result;
};