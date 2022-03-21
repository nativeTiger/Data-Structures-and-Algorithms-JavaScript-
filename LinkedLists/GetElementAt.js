/**
 * To get the element at specified position,
 * we first check the boundary of the index, if it is out of bounday we return undefined,
 * then if it is with in the boundary:
 *  head will be assign to the first node,
 *  and ittirate to the desired position, and until if it isn't the last element,
 *  and assign the node to next node
 *  and return node if it is its desire position.
 */

function getElementAt(index) {
  if (index >= 0 && index < this.count) {
    let node = this.head;
    for (let i = 0; i < index; i++ && node.next != null) {
      node = node.next;
    }
    return node;
  }
  return undefined;
}

module.exports = { getElementAt };
