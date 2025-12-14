export default class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  toString() {
    return this.value.toString();
  }

  isEqual(other) {
    return other instanceof Node && this.value === other.value;
  }

  isTail() {
    return this.nextNode === null;
  }
}
