const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    switch( item ) {
      case '--discard-next':
        if ('--double-prev' === arr[i+2] || '--discard-prev' === arr[i+2]) {
          i += 2;
        } else {
          i++;
        }
        break;
      case '--discard-prev':
        newArray.pop();
        break;
      case '--double-next':
        i++;
        if (i < arr.length ) {
          newArray.push(arr[i]);
          newArray.push(arr[i]);
        }
        break;
      case '--double-prev':
        if (i > 0 ) {
          newArray.push(newArray[newArray.length - 1]);
        }
        break;
      default: 
        newArray.push(item)
        break;
    }
  }

  return newArray;
}
