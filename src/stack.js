const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
  }
  
  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.data.push(element);
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    let item = this.data[this.data.length -1];
    this.data.pop();
    return item;
    
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.data[this.data.length -1];
  }
}

module.exports = {
  Stack
};
