/**
 *  so firstly we checked if the index boundary i.e if index is more than count then
 *  it would be out of boundary, which retured undefined.
 *  that means index boundary is from 0 to this.count
 *  if it is in boundary then we performed following
 *  1. if the index is equals to 0 means  remove first element,
 *     so we perfomed like this, first we store first element in current,
 *     then assing head to next of current i.e second element in this case,
 *     and we decreased the count and return that removed element.
 *  2. if the index is not equals to 0 , means we have0000 to remove other than first elements,
 *     so we have to ittirate to that of index - 1 position means if index is 3 then we have to ittirate to
 *     index - 1 i.e 2, so we store the element of index -1 to previous and current will be current.next;
 *     and if we reached the specified index then we terminate the loop and assign the previous.next = current.next,
 *     so that current element will be removed
 */
const { getElementAt } = require("./GetElementAt");

function removeAt(index) {
  if (index >= 0 && index < this.count) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.cout--;
    return current.element;
  }
  return undefined;
}

// we can refactor our above code using our getElementAt() function
function removeAtRefector(index) {
  if (index >= 0 && index < this.count) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
  return undefined;
}

module.exports = { removeAt, removeAtRefector };
