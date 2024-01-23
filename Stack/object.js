// object based stack class
class Stack {
  constructor() {
    this.count = 0;
    this.item = {};
  }
  // Determine the size of object
  size() {
    return this.count;
  }
  //returns true if the stack doesnot contain any elements
  isEmpty() {
    return this.count === 0;
  }
  // adds a new element to the top of the stack.
  push(element) {
    this.item[this.count] = element;
    this.count++;
  }
  // removes the top element from the stack.
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.item[this.count];
    //delete result;
    return result;
  }
  // returns the top element from the stack
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.count - 1];
  }
  //Clearing the elements of the stack
  clear() {
    this.count = 0;
    this.item = {};
  }
}

let stack = new Stack(); //object creation
