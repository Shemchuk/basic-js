const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('(  )');
    } else 
    {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' &&
        Number.isInteger(position) &&
        position > 0 &&
        position <= this.arr.length) {
          this.arr.splice(position - 1, 1);
          return this;
        } else {
          this.arr = [];
          throw new Error();
        }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.arr.join('~~');
    this.arr = [];
    return resultChain;
  }
};

module.exports = chainMaker;
