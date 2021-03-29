const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let splitter = options.separator || '+';
  let result = '';
  let addition = options.addition || '';
  let repeat = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes-1 || 0;
  const repeatS = additionRepeatTimes + repeat
  for (let i=0; i < repeatS; i++){
    result = result ? result + splitter + str + addition : str + addition;
  }
  return result;
};
  