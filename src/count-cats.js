const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const arr = matrix.flat(1);
  let count = 0;

  arr.forEach(item => {
    if (item === '^^') {
      count ++;
    }
  });
  
  return count;
};
