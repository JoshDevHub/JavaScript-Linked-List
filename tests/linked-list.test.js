import { describe, test, expect, beforeEach } from "@jest/globals";
import LinkedList from "../src/linked-list";

describe("LinkedList", () => {
  describe("fromValues", () => {
    test("returns a new list formed from the given values in order", () => {
      const list = LinkedList.fromValues(5, 10, 15, 20);

      expect(list.size()).toBe(4);

      expect(list.at(0)).toBe(5);
      expect(list.at(1)).toBe(10);
      expect(list.at(2)).toBe(15);
      expect(list.at(3)).toBe(20);
      expect(list.at(4)).toBeUndefined();
    })

    test("can return an empty list", () => {
      const emptyList = LinkedList.fromValues();

      expect(emptyList.size()).toBe(0);
      expect(emptyList.at(0)).toBeUndefined();
    })
  })

  describe("head", () => {
    test("returns `undefined` when there is no head node for the list", () => {
      const list = new LinkedList();

      expect(list.head()).toBeUndefined();
    })

    test("returns the head node's value when there is a head node for the list", () => {
      const list = new LinkedList();
      list.prepend(5);
      expect(list.head()).toBe(5);

      list.prepend(10);
      expect(list.head()).toBe(10);
    })

    test("returns the first node's value when constructed from a list of values", () => {
      const list = LinkedList.fromValues(2, 4, 6, 8);
      expect(list.head()).toBe(2)
    })
  })

  describe("tail", () => {
    test("returns the only value in a list with one element", () => {
      const list = new LinkedList();
      list.prepend(5);

      expect(list.tail()).toBe(5);
    })

    test("returns `undefined` for an empty list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBeUndefined();
    })

    test("returns the last value in a list with many items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);
    })
  })

  describe("append", () => {
    test("adds the given item to the end of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);

      list.append(10);

      expect(list.tail()).toBe(10);
    })

    test("with an empty list, it adds a new item at the beginning and end of the list", () => {
      const list = new LinkedList();
      expect(list.head()).toBeUndefined();
      expect(list.tail()).toBeUndefined();

      list.append(1);

      expect(list.head()).toBe(1);
      expect(list.tail()).toBe(1);
    })

    test("increases the size of the list by one", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);

      list.append(10);

      expect(list.size()).toBe(1);
    })
  })

  describe("prepend", () => {
    test("adds the given item to the beginning of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.head()).toBe(1);

      list.prepend(0);

      expect(list.head()).toBe(0);
    })

    test("with an empty list, it adds a new item to the end and beginning of the list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBeUndefined();
      expect(list.tail()).toBeUndefined();

      list.prepend(1);

      expect(list.tail()).toBe(1);
      expect(list.tail()).toBe(1);
    })

    test("increases the size of the list by one", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);

      list.prepend(1)

      expect(list.size()).toBe(1);
    })
  })

  describe("size", () => {
    test("returns 0 for an empty list", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);
    })

    test("returns 1 for a list with one item", () => {
      const list = new LinkedList();
      list.append(5);

      expect(list.size()).toBe(1);
    })

    test("returns 5 for a list with 5 items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.size()).toBe(5);
    })
  })

  describe("at", () => {
    const list = LinkedList.fromValues(5, 10, 15, 20);

    test("returns the element at the given index", () => {
      expect(list.at(0)).toBe(5);
      expect(list.at(1)).toBe(10);
      expect(list.at(2)).toBe(15);
      expect(list.at(3)).toBe(20);
    })

    test("returns undefined for an index below 0", () => {
      expect(list.at(-1)).toBeUndefined();
    })

    test("returns undefined for an index above the length of the list", () => {
      expect(list.at(4)).toBeUndefined();
    })
  })

  describe("pop", () => {
    describe("with a multi-element list", () => {
      let list = null;
      beforeEach(() => list = LinkedList.fromValues(1, 2, 3))

      test("returns the first value from a list with items in it", () => {
        expect(list.pop()).toBe(1);
      })

      test("changes the head node from the 0th element to the 1st element", () => {
        expect(list.head()).toBe(1);

        list.pop();

        expect(list.head()).toBe(2);
      })

      test("decreases the size of the list by one", () => {
        expect(list.size()).toBe(3);

        list.pop();

        expect(list.size()).toBe(2);
      })
    })

    describe("with one element in the list", () => {
      let list = null;
      beforeEach(() => list = LinkedList.fromValues(1))

      test("returns the value in the list", () => {
        expect(list.pop()).toBe(1);
      })

      test("makes the head node undefined", () => {
        expect(list.head()).toBe(1);

        list.pop();

        expect(list.head()).toBeUndefined();
      })

      test("decreases the size of the list by one", () => {
        expect(list.size()).toBe(1);

        list.pop();

        expect(list.size()).toBe(0);
      })
    })

    describe("with an empty list", () => {
      const list = new LinkedList();

      test("returns undefined", () => {
        expect(list.pop()).toBeUndefined();
      })

      test("it does not change the size of the list", () => {
        expect(list.size()).toBe(0);

        list.pop();

        expect(list.size()).toBe(0);
      })

      test("it does not change the head node", () => {
        expect(list.head()).toBeUndefined();

        list.pop();

        expect(list.head()).toBeUndefined();
      })
    })
  })

  describe("contains", () => {
    const list = LinkedList.fromValues(1, 2, 3);

    test("returns true when the given value is in the list", () => {
      expect(list.contains(1)).toBe(true);
      expect(list.contains(2)).toBe(true);
      expect(list.contains(3)).toBe(true);
    })

    test("returns false for a value that isn't in the list", () => {
      expect(list.contains(0)).toBe(false);
      expect(list.contains(4)).toBe(false);
    })
  })

  describe("findIndex", () => {
    const list = LinkedList.fromValues(5, 10, 15, 20);

    test("returns the index of the element if it's in the list", () => {
      expect(list.findIndex(5)).toBe(0);
      expect(list.findIndex(10)).toBe(1);
      expect(list.findIndex(15)).toBe(2);
      expect(list.findIndex(20)).toBe(3);
    })

    test("returns -1 for an element that's not in the list", () => {
      expect(list.findIndex(100)).toBe(-1);
    })
  })

  describe("toString", () => {
    test("returns 'null' with an empty list", () => {
      const list = new LinkedList();
      expect(list.toString()).toBe("null");
    })

    test("returns the valid string representation of the list with multiple items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4);
      expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null");
    })
  })

  describe("insertAt", () => {
    describe("with an index that isn't in the list", () => {
      test("raises a RangeError", () => {
        const list = new LinkedList();

        expect(() => list.insertAt(100, 1)).toThrow(RangeError);
        expect(() => list.insertAt(100, -1)).toThrow(RangeError);
      })
    })

    describe("to the index at the beginning of the list", () => {
      test("it inserts the item", () => {
        const list = new LinkedList();
        expect(list.size()).toBe(0);

        list.insertAt(100, 0);

        expect(list.head()).toBe(100);
        expect(list.tail()).toBe(100);
        expect(list.size()).toBe(1);
      })
    })

    describe("to the index in the middle of the list", () => {
      let list = {}
      beforeEach(() => list = LinkedList.fromValues(1, 2, 3, 4));

      const writeIndex = 2;
      const value = 100

      test("increases the size of the list", () => {
        expect(list.size()).toBe(4);

        list.insertAt(value, writeIndex);

        expect(list.size()).toBe(5);
      })

      test("writes the given value to the given index", () => {
        expect(list.at(2)).not.toBe(value);

        list.insertAt(value, writeIndex);

        expect(list.at(2)).toBe(value);
      })

      test("shifts the value at the previous index back", () => {
        expect(list.at(3)).not.toBe(3);

        list.insertAt(value, writeIndex);

        expect(list.at(3)).toBe(3);
      })
    })

    describe("to the index at the end of the list", () => {
      let list = {}
      beforeEach(() => list = LinkedList.fromValues(1, 2, 3, 4));

      const writeIndex = 4;
      const value = 100

      test("increases the size of the list", () => {
        expect(list.size()).toBe(4);

        list.insertAt(value, writeIndex);

        expect(list.size()).toBe(5);
      })

      test("writes the given value to the given index", () => {
        expect(list.at(4)).not.toBe(value);

        list.insertAt(value, writeIndex);

        expect(list.at(4)).toBe(value);
      })

      test("the new value is now the tail node", () => {
        expect(list.tail()).not.toBe(value);

        list.insertAt(value, writeIndex);

        expect(list.tail()).toBe(value);
      })
    })
  })

  describe("removeAt", () => {
    describe("removing from an index out of bounds", () => {
      test("raises a RangeError", () => {
        const list = new LinkedList();

        expect(() => list.removeAt(0)).toThrow(RangeError);
        expect(() => list.removeAt(-1)).toThrow(RangeError);
      })
    })

    describe("removing at the 0th index", () => {
      let list = {};
      beforeEach(() => list = LinkedList.fromValues(1, 2, 3));

      test("it reduces the size of the list by one", () => {
        expect(list.size()).toBe(3)

        list.removeAt(0);

        expect(list.size()).toBe(2)
      })

      test("it shifts the remaining items forward in the list", () => {
        expect(list.at(0)).toBe(1);

        list.removeAt(0);

        expect(list.at(0)).toBe(2);
      })
    })

    describe("removing from the middle of the list", () => {
      let list = {};
      beforeEach(() => list = LinkedList.fromValues(1, 2, 3));

      test("it reduces the size of the list by one", () => {
        expect(list.size()).toBe(3)

        list.removeAt(1);

        expect(list.size()).toBe(2)
      })

      test("it shifts the remaining items forward in the list", () => {
        expect(list.at(1)).toBe(2);

        list.removeAt(1);

        expect(list.at(1)).toBe(3);
      })
    })
  })
})
