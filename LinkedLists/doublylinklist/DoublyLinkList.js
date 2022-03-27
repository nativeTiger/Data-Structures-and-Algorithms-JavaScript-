// Doubly Link list
/**
 * in a doubly linked
   list, we have a double link: one for the next element and one for the
   previous element,
 */

const LinkedList = require("../LinkedLists");
const { Node } = require("../models/LinkedListModels");
const { defaulEquals } = require("../utils/DefaultEquals");

class DoublyNode extends Node {
  constructor(element, prev, next) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaulEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
  insertion(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }
  deletion(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return true;
    }
    return false;
  }
}

const double = new DoublyLinkedList();
console.log(double.insertion(4, 0));
console.log(double.deletion(0));
