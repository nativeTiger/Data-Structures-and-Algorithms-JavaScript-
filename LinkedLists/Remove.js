const { indexOf } = require("./IndexOf");
const { removeAt } = require("./RemoveAt");

function remove(element) {
  const index = this.indexOf(element);
  return this.removeAt(index);
}

module.exports = { remove };
