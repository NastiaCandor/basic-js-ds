const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.data = [];
  }
  
  push(element) {
    this.data.push(element);
  }

  pop() {
    let item = this.data[this.data.length -1];
    this.data.pop();
    return item;
    
  }

  peek() {
    return this.data[this.data.length -1];
  }
}

module.exports = {
  Stack
};
