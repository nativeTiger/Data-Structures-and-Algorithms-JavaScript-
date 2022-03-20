const { Node } = require("./models/LinkedListModels");
/**  PUSHING THE ELEMENT IN THE LINKED LIST
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
function push(element) {
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
}

module.exports = { push };
