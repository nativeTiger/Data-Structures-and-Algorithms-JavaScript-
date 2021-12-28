//Symbol is the new primitive type which is immutable.
const _items = Symbol("stackItems");
class Stack {
  constructor() {
    this[_items] = [];
  }
}

/**
as the _items property is an array, we can do any array operation such as
removing or adding an element to the middle of the array (the same
would happen if we were using an object to store the elements).
 */
