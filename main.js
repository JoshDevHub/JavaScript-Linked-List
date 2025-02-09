import LinkedList from "./lib/linked-list.js";

const list = new LinkedList();
list.append(5);
list.append(6);
list.append(7)
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.insertAt(3, 1);
list.pop();          // removes 7 from list
list.removeAt(4);    // removes 5 from list

console.log("Size should be 5, actual: ", list.size);
console.log("Head value should be 8, actual: ", list.head.value);
console.log("Node value at 1st index should be 3, actual: ", list.at(1).value);
console.log("Node with value 10 is found at index 3, actual: ", list.find(10));
console.log("Tail value should be 6, actual: ", list.tail().value);

console.log(
  "( 8 ) -> ( 3 ) -> ( 9 ) -> ( 10 ) -> ( 6 ) -> null",
  "\n",
  list.toString()
);
