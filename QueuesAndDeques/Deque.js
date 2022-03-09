/**
 * The deque data structure
 *      The deque data structure, also known as the double-ended
        queue, is a special queue that allows us to insert and remove
        elements from the end or from the front of the queue.
        An example of a deque in real life is the typical line for movie
        theaters, cafeterias, and so on. For example, a person who has just
        bought a ticket can come back to the front of the queue just to ask
        for some quick information. And if the person who is at the back of
        the queue is in a hurry, this person can also leave the queue.
 */
/** Methods available for the deque
 *
 *  1. addFront(element) => This method adds a new element at the front of the deque.
 *  2. addBack(element) => This method adds a new element at the back of the deque.
 *  3. removeFront() => This method removes a element from the front of the deque.
 *  4. removeBack() => This method removes a element from the back of the deque.
 *  5. peekFront() => This method returns the first element from the deque.
 *  6. peekBack() => This method returns the last element from the deque.
 *
 *  => The deque can also implement the isEmpty, clear, size and toString methods.
 */

// Creating deque
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  /**
   * 1. The first scenario is when the deque is empty ( {1} ). In this case, we
        can evoke the addBack method. The element will be added at the back
        of the deque, which, in this case, will also be the front of the deque.
        The addBack method already has the logic required to increase the
        count property, so we can reuse it to avoid duplicating code. 
    
     2. The second scenario is when an element is removed from the front
        of the deque ( {2} ), meaning the lowestCount property will have value 1
        or higher. In this case, we simply need to decrease the lowestCount
        property and assign the element to that object key (position).

        items = {
                1: 8,
                2: 9
                };
        count = 3;
        lowestCount = 1;

        If we want to add the element 7 to the front of the deque, we will
        match the second scenario. In this example, the lowestCount value will
        be decreased (new value will be 0 - zero), and we will add value 7 to
        the key 0 .
    
    3.  The third and last scenario is when the lowestCount is equals to 0
        (zero). We could assign a key with a negative value, and update the
        logic used to calculate the size of the deque to also evaluate negative
        keys. In this case, the operation to add a new value would continue
        to have the lowest computational cost. For educational purposes,
        we will treat this scenario as if we were working with arrays. To add
        a new element in the first key or position, we need to move all
        elements to the next position ( {3} ) to free the first index . Because we
        do not want to lose any existing value, we start to iterate the
        existing values of the items property by its last index, assigning the
        element from index - 1 . After all elements have been moved, the first
        position will be free and we can overwrite any exiting value with the
        element we want to add to the deque ( {4} ).
   *
   */
  addFront(element) {
    if (this.isEmpty()) {
      // {1}
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      //{2}
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      //{3}
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element; // {4}
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    return result;
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    return result;
  }
}

const deque = new Deque();
//deque.addFront(1); // { scenario 1}
//deque.addFront(2); //{ scenario 3}
//deque.removeFront();
//deque.addFront(3); // { scenario 2}
//deque.removeBack();
//console.log(deque.peekFront());
//console.log(deque);
