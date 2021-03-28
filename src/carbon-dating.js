const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if(typeof activity === 'string') {
    let n = +activity.trim();
    if(n && n < 15 && n > 0  && !isNaN(n)) {
      return Math.ceil((Math.log10(MODERN_ACTIVITY/activity) / Math.log10(2)) * HALF_LIFE_PERIOD);
    }
    return false;
  } else{
    return false;
  }
};