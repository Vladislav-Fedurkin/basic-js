const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
  let count = 0;
  cat.flat().forEach(function search (elem){
      if (elem === '^^') {
        count++;
      }
  });
  return  count;
};
