/**
 *  The Queue and Stack classes are very similar. The main difference comes with
    the dequeue and peek methods, which is because of the difference between the
    FIFO and LIFO principles.
 */

/**
 * The Queues Data Structure
        A queue is an ordered collection of items that follows the first in,
        first out (FIFO), also known as the first come, first
        served, principle. The addition of new elements in a queue is at the
        tail, and the removal is from the front. The newest element added to
        the queue must wait at the end of the queue.
 */

/**
 * Methods available for the Queues
 
 * 1. enqueue(elements) => This method adds the element at the back of the queue.
 * 2. dequeue() => This method removes the element from the front of the queue and
                   also return the removed elements.
 * 3. peek() => This method returns the first element from the queue,
                the first one that will be removed from the queue,
                It does not modified the queue.
 * 4. isEmpty() => This method returns true if the queue does not contain any elements, 
                   and false if the queue size is bigger than 0.
 * 5. size() => This method returns the number of elements the queue contains. 
                It is similar to the length property of the array.
 */
// Creating the queue
class Queue {
  constructor() {
    this.items = {}; //store our elements
    this.count = 0; // control the size of the queue
    this.lowestCount = 0; // keep track of the first element
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = this.items[this.lowestCount];
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();

for (let i = 1; i <= 5; i++) {
  queue.enqueue(i);
}
//console.log(queue.isEmpty());

//console.log(queue.toString());
//console.log(queue.size());
//console.log(queue.dequeue());
//console.log(queue);
