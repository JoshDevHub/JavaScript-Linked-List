# JavaScript Linked List

This is an implementation of a singly linked list written in JavaScript.

### Update 2/10

I refactored a lot of this project as an exercise in fiddling with a new JS feature: [iterator helper methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods).

These allow developers to easily use many of the familiar `Array.prototype`-style methods (`find()`, `some()`, `map()`, `reduce()`, etc.) over some custom iterator logic. I can outline how my linked list data structure should be iterated using a quick and easy generator function:

```js
*#genNodes() {
  let currentNode = this.head;
  while (currentNode) {
    yield currentNode;
    currentNode = currentNode.nextNode;
  }
}
```

And then the iterator helpers can be chained onto the generator, which creates really clean, expressive code for many of the methods in this exercise:

```js
contains(value) {
  return this.#genNodes().some((node) => node.value === value);
}
```

🤌

I really like this feature, and it brings JS functionality around this closer to what we have with Python's `itertools` or Ruby's `Enumerable` module.

### Methods

The following methods are implemented:
* `append(value)` - adds a node with the given value to the end of the list.
* `prepend(value)` - adds a node with the given value to the beginning of the list.
* `size` - returns the number of nodes in the list.
* `head` - returns the first node in the list.
* `tail()` - returns the last node in the list.
* `at(index)` - returns the node at a given index.
* `pop()` - removes the final item from the list and returns it.
* `contains(value)` - returns a boolean indicating if a node of the given value is in the list.
* `find(value)` - returns in the index of a node containing the given value.
* `toString()` - stringifies the Linked List.
* `insertAt(value, index)` - inserts a new nodes with the provided value at the given index.
* `removeAt(index)` - removes the node at the given index.
