/**
 *  There is one datatype we can use to ensure that the property will be
    private in a class, and it is called WeakMap . we need to know that a WeakMap can store a key value pair, where
    the key is an object and the value can be any datatype.
 */
const items = new WeakMap(); //declare items as the WeakMap
class Stack {
  constructor() {
    items.set(this, []); // setting the key as the reference to class and value to array
  }
  push(element) {
    const s = items.get(this); // retrieve the value by pass this object as the key
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}
