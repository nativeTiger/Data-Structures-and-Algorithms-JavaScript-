// Linked list data structure

/**
 * Linked lists store a sequential collection of elements but, unlike
   arrays, in linked lists the elements are not placed contiguously in
   memory. Each element consists of a node that stores the element
   itself and also a reference (also known as a pointer or link) that
   points to the next element.

                node                    node 
           *-------*--------*     *-------*--------*
   head => | value | next =>|=>   | value | next =>|=>  undefined
           *-------*--------*     *-------*--------*
    
    One of the benefits of a linked list over a conventional array is that
    we do not need to shift elements over when adding or removing
    them. However, we need to use pointers when working with a
    linked list and, because of this, we need to pay some extra attention
    when implementing a linked list. In the array, we can directly access
    any element at any position; in the linked list, if we want to access
    an element from the middle, we need to start from the beginning
    (head) and iterate the list until we find the desired element.       
   */

// Skeleton of our LinkedList class

const { defaulEquals } = require("./utils/DefaultEquals");
const { Node } = require("./models/LinkedListModels");

class LinkedList {
  constructor(equalsFn = defaulEquals) {
    this.count = 0; // stores the number of elements we have in the list.
    this.head = undefined; /**we also need to store a
                              reference to the first element as well. To do this, we can store
                              the this reference inside a variable 
                              */
    this.equalsFn = equalsFn; /**To compare equality
                                 between elements of the linked list, we will use a function that will
                                 be internally evoked as equalsFn 
                                 */
  }
  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current;
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    /**
     *   Firstly we create the node with the element we want to insert,
     *   there will be the two condition for inserting
     *   => if the linked list is emply and if not empty,
     *    if empty, then, we simply insert the new node in the  position of head,
     *    which is initially empty.
     *    if not empty, then we store the head in the temporary variable current and
     *    we itirate until the next position of the head, i.e store as current will be null,
     *    means it is the last node, so, we simply store the node to that last position. then,
     *    increment the count, which indicates the number of elements in the node.
     *
     */
  }
}

// Methods of the LinkedList class

/**
 * 1. push(element) => This method add the new element at the end of the list.
 * 2. insert(element,position) => This method add the element at the specified position in the list.
 * 3. getElementAt(index) => This method returns the element of a specific position in the list. 
 *                           If the element does not exist in the list, it returns undefined .
 *                           
 * 4. remove(element) => This method removes an element from the list.
 * 5. indexOf(element) => This method returns the index of the element
                          in the list. If the element does not exist in the list, it returns -1.
   6. removeAt(position) => This method removes an item from a specified position in the list.
   7. isEmpty() => This method returns true if the linked list does not contain any elements, 
                   and false if the size of the linked list is bigger than 0 .
   8. size() => This method returns the number of elements the linked list contains. 
                It is similar to the length property of the array.
   9. toString() => This method returns a string representation of the
                    linked list. As the list uses a Node class as an element, we need
                    to overwrite the default toString method inherited from the
                    JavaScript Object class to output only the element values.
                           
 */

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
console.log(linkedList);