const toString = () => {
  if (this.head === null) {
    return "";
  }

  let objectString = `${this.head.element}`;
  let current = this.head.next;
  for (let i = 1; i < this.size() && current !== null; i++) {
    objectString = `${objectString},${current.element}`;
    current = current.next;
  }
  return objectString;
};

module.exports = toString;
