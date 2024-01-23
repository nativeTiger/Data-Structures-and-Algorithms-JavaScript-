class DoublyNode {
  constructor(element) {
    this.element = element;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoublyLinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
    this.tail = undefined;
  }
  size() {
    return this.count;
  }
  push(element) {
    const node = new DoublyNode(element);
    let current = this.head;
    // if there is no element in list
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      // if there exist element in list
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }
  insertionAt(element, index) {
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
}

const doubleLinkedList1 = new DoublyLinkedList();
const doubleLinkedList2 = new DoublyLinkedList();
const doubleLinkedList3 = new DoublyLinkedList();

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// doubleLinkedList1.push(2);
// doubleLinkedList1.push(4);
// doubleLinkedList1.push(3);

// doubleLinkedList2.push(5);
// doubleLinkedList2.push(6);
// doubleLinkedList2.push(4);

// Example 2:
// Input: (l1 = [0]), (l2 = [0]);
// Output: [0];

// doubleLinkedList1.push(0);
// doubleLinkedList2.push(0);

// Example 3:
// Input: (l1 = [9, 9, 9, 9, 9, 9, 9]), (l2 = [9, 9, 9, 9]);
// Output: [8, 9, 9, 9, 0, 0, 0, 1];

doubleLinkedList1.push(9);
doubleLinkedList1.push(9);
doubleLinkedList1.push(9);
doubleLinkedList1.push(9);
doubleLinkedList1.push(9);
doubleLinkedList1.push(9);
doubleLinkedList1.push(9);

doubleLinkedList2.push(9);
doubleLinkedList2.push(9);
doubleLinkedList2.push(9);
doubleLinkedList2.push(9);

/**
 * Make sure there is equal number of elements in list,
   if not append with 0 to make equal
 */

const difference = Math.abs(
  doubleLinkedList1.size() - doubleLinkedList2.size()
);

for (let i = 0; i < difference; i++) {
  if (doubleLinkedList1.size() > doubleLinkedList2.size()) {
    doubleLinkedList2.insertionAt(0, 0);
  } else {
    doubleLinkedList1.insertionAt(0, 0);
  }
}

// Perform addition
let node1 = doubleLinkedList1.tail;
let node2 = doubleLinkedList2.tail;

let carry = 0;

while (node1 !== undefined && node2 !== undefined) {
  const sum = node1.element + node2.element + carry;
  if (sum >= 10) {
    if (node1.prev !== undefined || node2.prev !== undefined) {
      doubleLinkedList3.push(sum % 10);
      carry = Math.trunc(sum / 10);
    } else {
      if (sum >= 10) {
        doubleLinkedList3.push(0);
        doubleLinkedList3.push(Math.trunc(sum / 10));
      } else {
        doubleLinkedList3.push(sum);
      }
    }
  } else {
    doubleLinkedList3.push(sum);
    carry = 0;
  }
  node1 = node1.prev;
  node2 = node2.prev;
}

// Display the result
let node3 = doubleLinkedList3.head;
while (node3 !== undefined) {
  process.stdout.write(`${node3.element} `);
  node3 = node3.next;
}

module.exports = DoublyLinkedList;
