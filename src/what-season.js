const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
//   let season = ['summer', 'autumn', 'winter', 'spring'];
//  const month =  Math.floor((date.getMonth() / 12 * 4)) % 4;
//  return season[month];
  const month = date.getMonth();
  if (2 <= month <= 4) {
      return 'spring';
  }

  if (5 <= month <= 7) {
      return 'summer';
  }

  if (8 <= month <= 10) {
      return 'fall';
  }

  // Months 12, 01, 02
  return 'winter';
};
