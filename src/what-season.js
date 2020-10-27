const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  
  if (date instanceof Date && !isNaN(date.valueOf())) {
    switch(date.getMonth()) {
      case 11:
      case 0:
      case 1:
        return 'winter';
        break;
      case 2:
      case 3:
      case 4:
        return 'spring';
        break;
      case 5:
      case 6:
      case 7:
        return 'summer';
        break;
      case 8:
      case 9:
      case 10:
        return 'fall';
        break;
    }
  } else {
    // throw new CustomError('Not implemented');
    throw new Error();
  }
};
