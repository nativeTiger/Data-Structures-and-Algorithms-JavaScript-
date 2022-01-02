// converting the decimal to binary using stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    return this.items.pop();
  }
}
function decimalToBinary(decimalNumber) {
  const reminderStack = new Stack();
  let number = decimalNumber;
  let reminder;
  let binaryNumber = new String();
  while (number > 0) {
    reminder = Math.floor(number % 2);
    reminderStack.push(reminder);
    number = Math.floor(number / 2);
  }
  while (!reminderStack.isEmpty()) {
    binaryNumber += reminderStack.pop();
  }
  return binaryNumber;
}

console.log(decimalToBinary(10));
