const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';

  if (Array.isArray(members) && members.length > 0) {
    team = members.reduce( (str, member) => {
      if (typeof member === 'string') {
        let tmp = member.trim();
        if (tmp.length > 0) {
          str += tmp[0].toUpperCase();
        }
        return str;
      } else {
        return str;
      }
    }, '');
    return team.split('').sort().join('');
  } else {
    return false;
  }

};
