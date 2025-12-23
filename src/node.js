export default class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  toString() {
    return `( ${this.value} ) ->`;
  }

  isTail() {
    return this.nextNode === null;
  }

  secondSuccessor() {
    return this.nextNode?.nextNode ?? null;
  }
}
