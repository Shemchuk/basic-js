const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (!sampleActivity || 
    typeof sampleActivity !== 'string') {
      return false;
    }
    
  let activity = +sampleActivity;

  if (typeof activity === 'number' && 
      activity > 0 &&
      activity < MODERN_ACTIVITY ) {
    return Math.ceil(HALF_LIFE_PERIOD * MODERN_ACTIVITY / sampleActivity);
  } else {
    return false;
  }
};
