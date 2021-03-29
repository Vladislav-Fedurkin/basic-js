const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(pos) {
    if (typeof pos !== 'number' || pos < 1 || pos > this.chain.length) {
      throw new Error();
    }
    this.chain.splice(pos-1, 1);
    return this;
  },
  reverseChain() {
     this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;