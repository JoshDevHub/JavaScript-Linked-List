import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    this.tail().nextNode = new Node(value);
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  at(index) {
    return this.#genNodes().find((_, i) => index === i);
  }

  size() {
    let counter = 0;
    this.#genNodes().forEach(() => counter++);
    return counter;
  }

  tail() {
    return this.#genNodes().find((node) => !node.nextNode);
  }

  pop() {
    if (!this.head) return;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    const preTailNode = this.#genNodes().find((node) => !node.nextNode.nextNode);
    preTailNode.nextNode = null;
  }

  contains(value) {
    return this.#genNodes().some((node) => node.value === value);
  }

  find(value) {
    let indexCounter = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (pointer.value === value) return indexCounter;

      pointer = pointer.nextNode;
      indexCounter++;
    }
    return -1;
  }

  toString() {
    let pointer = this.head;
    let string = "";
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return `${string}null`;
  }

  insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }

    const nodeBeforeIndex = this.at(index - 1);
    const newNode = new Node(value, nodeBeforeIndex.nextNode);
    nodeBeforeIndex.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    const nodeBeforeIndex = this.at(index - 1);
    nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;
  }

  *#genNodes() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.nextNode;
    }
  }
}
