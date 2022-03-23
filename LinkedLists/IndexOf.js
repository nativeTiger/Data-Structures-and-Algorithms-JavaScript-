function indexOf(element) {
  let current = this.head;
  for (let i = 0; i < this.count && current != null; i++) {
    if (this.equalsFn(element, current.element)) {
      return i;
    }
    current = current.next;
  }
  return -1;
}

module.exports = { indexOf };
