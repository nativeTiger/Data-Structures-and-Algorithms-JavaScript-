/**
 * THE STACK DATA STRUCTURE
 * A stack is an ordered collection	of items that follows the last in, first out (LIFO)	principle.
 * The addition	of new items or	the	removal	of	existing items takes place	at	the	same end.
 * 	The	end	of	the	stack is known as the top, and the opposite	side is	known as the base.
 * 	The	newest	elements are near the top, and the oldest elements are near	the	base.
 *  A stack is also used by compilers in programming languages, by the computer memory
 * to store variables and method calls and aso by the browser history(the browser's back button).

 */

//CREATING an ARRAY-BASED STACK CLASS
class Stack {
  constructor() {
    this.items = [];
  }
}
/**
 * The following methods will be availabel in the Stack class.s
 * -> push(element(s)): This method adds a new element(or severl elements) to the top of the stack.
 * -> pop(): This method removes the top element from the stack. It also returns the removed element.
 * -> peek(): This  . The stack is not modified( it does not remove
 *     the element, it only returns the element for information purposes).
 * -> isEmpty(): This method returns true if the stack doesnot contain any elements and false if the size of the
 *     stack is bigger than 0
 * -> clear():	This method	removes	all	the	elements of	the	stack.
 * -> size():	This method	returns	the	number of elements that	the	stack contains. It is similar to the
 * 	            length	property of	an	array.
 */
// we put ; in the function to avoid ts error in my editor
// Pushing elements to the stack
push(element);
{
  this.items.push(element);
}
// Popping elements from the stack
pop();
{
  return this.items.pop();
}
//Peeking the element from the top of the stack
peek();
{
  return this.items[this.items.length - 1];
}

// Verifying whether the stack is empty
isEmpty();
{
  return this.items.length === 0;
}

// Determine the size of array
size();
{
  return this.items.length;
}

//Clearing the elements of the stack
clear();
{
  this.items = [];
}

const stack = new Stack();
console.log(stack.isEmpty()); // outputs true

// Next, let's add some elements to it

stack.push(5);
stack.push(8);

console.log(stack.peek()); //outputs 8

// Let's also add another element

stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); // outputs false

// Also add another elements
stack.push(15);

// let's remove two elements from the stack
stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
