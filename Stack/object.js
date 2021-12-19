// Stack class
class Stack {
  constructor() {
    this.count = 0;
    this.item = {};
  }
  push(element) {
    this.item[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.item[this.count];
    delete result;
    return result;
  }
  peek() {
      if(this.isEmpty()) {
          return undefined;
      }
      return this.item[this.count - 1]
  }
  clear() {
      this.count =  0;
      this.item = {}
  }
}

let stack = new Stack(); //object creation