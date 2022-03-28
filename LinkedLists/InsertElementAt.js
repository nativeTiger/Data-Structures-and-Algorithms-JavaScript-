const { Node } = require("./models/LinkedListModels");
const { getElementAt } = require("./GetElementAt");

function insertElementAt(index, element) {
  if (index >= 0 && index <= this.count) {
    let node = new Node(element);
    if (index === 0) {
      current = this.head;
      node.next = current.next;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
    return true;
  }
  return undefined;
}

module.exports = { insertElementAt };
