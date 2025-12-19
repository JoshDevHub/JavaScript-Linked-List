import Node from "./node.js";

export default class LinkedList {
  #head;

  static fromValues(...values) {
    const list = new LinkedList();
    values.reverse().forEach((value) => list.prepend(value));

    return list;
  }

  constructor() {
    this.#head = null;
  }

  head() {
    return this.#head?.value;
  }

  tail() {
    return this.#tailNode()?.value;
  }

  append(value) {
    if (!this.#head) {
      this.#head = new Node(value);
      return;
    }

    this.#tailNode().nextNode = new Node(value);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    return this.#genNodes().reduce((counter) => counter + 1, 0);
  }

  at(index) {
    return this.#findNode((_, i) => index === i)?.value;
  }

  pop() {
    if (!this.#head) return;

    const out = this.#head.value;
    this.#head = this.#head.nextNode;
    return out;
  }

  contains(value) {
    return this.#genNodes().some((node) => node.value === value);
  }

  findIndex(value) {
    let foundIdx = -1;
    this.#findNode((node, i) => {
      if (node.value === value) {
        foundIdx = i;
        return true;
      }
    })
    return foundIdx;
  }

  toString() {
    if (!this.#head) return "";

    const listString = this.#genNodes().toArray().join(" ")
    return `${listString} null`;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index value is outside the bounds of this object");
    }

    if (index === 0) {
      values.reverse().forEach((val) => this.prepend(val));
      return;
    }

    const nodeBeforeIndex = this.#findNode((_, i) => i === index - 1);
    while (values.length > 0) {
      const newNode = new Node(values.pop(), nodeBeforeIndex.nextNode);
      nodeBeforeIndex.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index value is outside the bounds of this object");
    }

    if (index === 0) {
      this.pop();
      return;
    }

    const nodeBeforeIndex = this.#findNode((_, i) => i === index - 1);
    nodeBeforeIndex.nextNode = nodeBeforeIndex.secondSuccessor();
  }

  #tailNode() {
    return this.#findNode((node) => node.isTail());
  }

  #findNode(callback) {
    return this.#genNodes().find(callback)
  }

  *#genNodes() {
    let currentNode = this.#head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.nextNode;
    }
  }
}
