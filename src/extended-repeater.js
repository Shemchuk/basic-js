const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator; 
  let additionSeparator; 
  let addition = '';
  let repeatTimes = 1; 
  let additionRepeatTimes  = 1; 
  let resultString = '';
  str = String(str);
  let additionString = '';
  
  if (typeof options.separator !== "undefined") {
    separator = options.separator;
  } else {
    separator = '+';
  }

  if (typeof options.additionSeparator !== "undefined") {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = '|';
  }

  // check addition
  if (typeof options.addition !== "undefined") {
    // create addition
    let additionArray = [];
    
    if (typeof options.additionRepeatTimes === "number" && Number.isInteger(options.additionRepeatTimes)) {
      additionRepeatTimes = options.additionRepeatTimes;
    }
    
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArray.push(String(options.addition));
    }
    
    console.log(`addition array = ${additionArray}`);
    additionString = additionArray.join(additionSeparator);
  } 
  
  // check repeat times
  if (typeof options.repeatTimes === 'number' && Number.isInteger(options.repeatTimes)) {
    repeatTimes = options.repeatTimes;
  }

    // repeat string
    let stringArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      stringArray.push(str + additionString);
    }
    
    resultString = stringArray.join(separator);
    return resultString;

};
  