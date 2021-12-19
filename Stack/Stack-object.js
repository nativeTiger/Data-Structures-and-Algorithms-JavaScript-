// CREATING A JAVASCRIPT OBJECT-BASED STACK CLASS

/**
 * The easiest way of creating a stack class is using an array to store its elements.
 * When working with a large set of data(which is very common in real-world projects),
 * we also need to analyze what is the most efficient way of manipulating the data.
 * When working with arrays, most methods have a complexity of time O(n);
 * What this means is that, for most methods, we need to iterate through the array,
 * until we find the element we are looking for and , in the worst=case scenario,
 * we will iterate through all the positions of the array, where n is the size of the array.
 * If the array has more elements, it will take longer to iterate through all elements compared
 * to an array with fewer elements. In addition, an array is an ordered set of the elements, and
 * to keep the elements in order, it would need more space in the memory as well.
 *
 * Wouldn't it be better if we could access the element directly, use less memory space,
 * and still have all the elements organized the way we need to? For the scenario of a
 * stack data structure in the JS language, it is also possible to use JavaScript object to store
 * the stack elements, keep them in order, and also comply with the LIFO principle.
 *
 */
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // methods
}

/**
 *  For this version of the stack class, we will use a count property to help us keep track of the size of the stack(
    and, consequently, also help us add and remove elements in the data structure).
 */

// Pushing elements to the stack
push(element);
{
  this.items[this.count] = element;
  this.count++;
}

const stack = new Stack();
stack.push(5);
stack.push(8);

/**
 * Internally, we will have the following values inside the items and count properties:
 * items = {
    0:5,
    1:8
  };
  count = 2;
 */

// Verifying whether the stack is empty and its size

// The count property also works as the size fo the stack. So, for the size method,
// we can simply return the count property
size();
{
  return this.count;
}

// And to verify whether the stack is empty, we can compare if the count value is 0 as follows:
isEmpty();
{
  return this.count === 0;
}

// Popping elements from the stack
/**
 * As we are not using an array to store the elements, we will need to implement
 * the logic to remove an element manually.The pop method also returns the
 * element that was removed from the stack.
 */
pop();
{
  if (this.isEmpty()) {
    return undefined; // we need to verify whether the stack is empty.
  }
  this.count--; // if the stack is not empty, we will decrement the count property.
  const result = this.items[this.count]; // we will store the value from the top of the stack,
  //so we can return it after the element has been removed.
  delete this.items[this.count];
  return result;
}
// let's use the following internal values to emulate the pop action:
items = {
  0: 5,
  1: 8,
};
count = 2;
//To access the element from the top of the stack(latest element added:8),we need to access the key with value 1,
//So we decrement the count variable from 2 to 1, we are able to access items[1], delete it and return its value.

// Peeking the top of the stack and clearing it
/**
 * In the last section, we learned that, in order to access the element
 * that is stored at the top of the stack, it is necessary to decrement the
 * count property by 1, Sol let's see the code for the peek method:
 */
peek();
{
  if (this.isEmpty()) {
    return undefined;
  }
  return this.items[this.count - 1];
}

// And to clear the stack, we can simply reset it to the  same values we used in the constructor:
clear();
{
  this.items = {};
  this.count = 0;
}

// We could also use the following logic to remove all elements from the stack, respecting the LIFO behavior:
while (!this.isEmpty()) {
  this.pop();
}
