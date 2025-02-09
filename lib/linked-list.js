import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append = (value) => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let pointer = this.head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
  }

  prepend = (value) => {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  at = (index) => {
    let indexCount = 0;
    let pointer = this.head;
    while (indexCount < index) {
      pointer = pointer?.nextNode;
      indexCount++;
    }
    return pointer;
  }

  size = () => {
    let pointer = this.head;
    let counter = 0;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
      counter++;
    }
    return counter;
  }

  tail = () => {
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  
  pop = () => {
    let currPointer = this.head;
    let nextPointer = this.head.nextNode;
    while (nextPointer.nextNode !== null) {
      currPointer = currPointer.nextNode;
      nextPointer = nextPointer.nextNode;
    }
    const returnNode = nextPointer;
    currPointer.nextNode = null;
    return returnNode;
  }

  contains = (value) => {
    let pointer = this.head;
    while (pointer !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }

  find = (value) => {
    let indexCounter = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (pointer.value === value) return indexCounter;

      pointer = pointer.nextNode;
      indexCounter++;
    }
    return -1;
  }

  toString = () => {
    let pointer = this.head;
    let string = "";
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return `${string}null`;
  }

  insertAt = (value, index) => {
    if (index === 0) {
      prepend(value);
      return;
    }

    const nodeBeforeIndex = this.at(index - 1);
    const newNode = new Node(value, nodeBeforeIndex.nextNode);
    nodeBeforeIndex.nextNode = newNode;
  }

  removeAt = (index) => {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    const nodeBeforeIndex = this.at(index - 1);
    nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;
  }
}
