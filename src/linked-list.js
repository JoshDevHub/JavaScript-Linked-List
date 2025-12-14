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
    return this.#head?.value ?? null;
  }

  tail() {
    const tailNode = this.#genNodes().find((node) => node.isTail());
    return tailNode?.value ?? null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    this.tail().nextNode = new Node(value);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  at(index) {
    return this.#genNodes().find((_, i) => index === i);
  }

  size() {
    return this.#genNodes().reduce((counter) => counter + 1, 0);
  }

  pop() {
    if (!this.head || this.head.isTail()) {
      this.head = null;
      return;
    }

    const preTailNode = this.#genNodes().find((node) => node.nextNode.isTail());
    preTailNode.nextNode = null;
  }

  contains(value) {
    return this.#genNodes().some((node) => node.value === value);
  }

  find(value) {
    return this.#genNodes().toArray().findIndex((node) => node.value === value);
  }

  toString() {
    const listString = this.#genNodes().reduce((string, node) => {
      return `${string}( ${node} ) -> `;
    }, "")
    return listString + "null";
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

  *#genNodes() {
    let currentNode = this.#head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.nextNode;
    }
  }
}
