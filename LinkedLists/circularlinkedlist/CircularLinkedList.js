// Circular Linked List

const LinkedList = require("../LinkedLists");
const { Node } = require("../models/LinkedListModels");
const { defaulEquals } = require("../utils/DefaultEquals");

/***
 * A circular linked list can have only one reference direction (as
   with a linked list) or a double reference (as with a doubly linked
   list). The only difference between a circular linked list and a linked
   list is that the last element's next ( tail.next ) pointer does not make a
   reference to undefined , but to the first element ( head ).
 */

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaulEquals) {
    super(equalsFn);
  }
  insertion(index, element) {
    let node = new Node(element);
    let current = this.head;
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          this.head = node;
          node.next = current;
          current = this.getElementAt(this.size());
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  deletion(index) {
    let current = this.head;
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          this.head = this.head.next;
          current = this.getElementAt(this.size());
          current.next = this.head;
        }
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return true;
    }
    return undefined;
  }
}

const circularLinkedList = new CircularLinkedList();
console.log(circularLinkedList.insertion(0, 2));
console.log(circularLinkedList.deletion(0));
