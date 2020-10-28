const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if ( JSON.stringify(arr) === JSON.stringify(arr.flat()) ) {
      return count;
    } else {
      count += this.calculateDepth(arr.flat());
      return count;
    }
  }
};
