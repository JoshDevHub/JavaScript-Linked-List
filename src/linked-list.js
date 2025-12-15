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
    return this.at(0);
  }

  tail() {
    return this.#tailNode().value
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
    return this.#findNode((_, i) => index === i).value
  }

  pop() {
    if (!this.#head) return null;

    const out = this.#head.value;
    this.#head = this.#head.nextNode;
    return out;
  }

  contains(value) {
    return this.#genNodes().some((node) => node.value === value);
  }

  find(value) {
    let foundIdx = null;
    this.#findNode((node, i) => {
      if (node.value === value) {
        foundIdx = i;
        return true;
      }
    })
    return foundIdx;
  }

  toString() {
    const listString = this.#genNodes().reduce((str, node) => `${str}( ${node} ) -> `, "");
    return `${listString}null`
  }

  insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }
    const nodeBeforeIndex = this.at(index - 1);
    if (!nodeBeforeIndex) return;

    nodeBeforeIndex.nextNode = new Node(value, nodeBeforeIndex.nextNode);
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head?.nextNode;
      return;
    }
    const nodeBeforeIndex = this.at(index - 1);
    if (!nodeBeforeIndex?.nextNode) return;

    nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;
  }

  #tailNode() {
    return this.#findNode((node) => node.isTail());
  }

  #findNode(callback) {
    return this.#genNodes().find(callback) ?? { value: null }
  }

  *#genNodes() {
    let currentNode = this.#head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.nextNode;
    }
  }
}
