import { describe, test, expect } from "@jest/globals";
import LinkedList from "../src/linked-list";

describe("LinkedList", () => {
  describe("fromValues", () => {
    test("returns a new list formed from the given values in order", () => {
      const list = LinkedList.fromValues(5, 10, 15, 20);

      expect(list.toArray()).toEqual([5, 10, 15, 20]);
    })

    test("can return an empty list", () => {
      const emptyList = LinkedList.fromValues();

      expect(emptyList.toArray()).toEqual([]);
    })
  })

  describe("toArray", () => {
    test("returns an empty array with an empty list", () => {
      expect(new LinkedList().toArray()).toEqual([])
    })

    test("returns an array with [1, 2, 3] when used on a list with those elements", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.toArray()).toEqual([1, 2, 3])
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
      list.append(10);

      expect(list.toArray()).toEqual([1, 2, 3, 4, 5, 10]);
    })

    test("with an empty list, it adds a new item as the only value in the list", () => {
      const list = new LinkedList();
      list.append(1);

      expect(list.toArray()).toEqual([1]);
    })
  })

  describe("prepend", () => {
    test("adds the given item to the beginning of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);

      list.prepend(0);

      expect(list.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
    })

    test("with an empty list, it adds a new item to the end and beginning of the list", () => {
      const list = new LinkedList();

      list.prepend(1);

      expect(list.toArray()).toEqual([1]);
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
      test("returns the first value from a list with items in it", () => {
        const list = LinkedList.fromValues(1, 2, 3);

        expect(list.pop()).toBe(1);
      })

      test("removes the first node from the list", () => {
        const list = LinkedList.fromValues(1, 2, 3);
        list.pop();

        expect(list.toArray()).toEqual([2, 3])
      })
    })

    describe("with one element in the list", () => {
      test("returns the value in the list", () => {
        const list = LinkedList.fromValues(1);
        expect(list.pop()).toBe(1);
      })

      test("makes the head node undefined", () => {
        const list = LinkedList.fromValues(1);

        list.pop();

        expect(list.toArray()).toEqual([]);
      })
    })

    describe("with an empty list", () => {
      test("returns undefined", () => {
        const list = new LinkedList();
        expect(list.pop()).toBeUndefined();
      })

      test("it does not change the list", () => {
        const list = new LinkedList();

        list.pop();

        expect(list.toArray()).toEqual([]);
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
    test("returns an empty string with an empty list", () => {
      const list = new LinkedList();
      expect(list.toString()).toBe("");
    })

    test("returns the valid string representation of the list with multiple items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4);
      expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null");
    })
  })

  describe("insertAt", () => {
    test("throws a `RangeError` when used with an out of bounds index", () => {
      const list = new LinkedList();

      expect(() => list.insertAt(1, 100)).toThrow(RangeError);
      expect(() => list.insertAt(-1, 100)).toThrow(RangeError);
    })

    test("can write the given value to the index at the front of the list", () => {
      const list = new LinkedList();

      list.insertAt(0, 100);

      expect(list.toArray()).toEqual([100])
    })

    test("can write the given value to an index in the middle of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4);

      list.insertAt(2, 100)

      expect(list.toArray()).toEqual([1, 2, 100, 3, 4]);
    })

    test("writes the given value to an index at the end of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4);

      list.insertAt(4, 100);

      expect(list.toArray()).toEqual([1, 2, 3, 4, 100]);
    })

    test("inserts them all to the list", () => {
      const list = LinkedList.fromValues(1, 2, 3);
      list.insertAt(1, 10, 20, 30);

      expect(list.toString()).toBe("( 1 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> ( 2 ) -> ( 3 ) -> null");
    })
  })

  describe("removeAt", () => {
    test("throws a `RangeError` when used with an out of bounds index", () => {
      const list = new LinkedList();

      expect(() => list.removeAt(0)).toThrow(RangeError);
      expect(() => list.removeAt(-1)).toThrow(RangeError);
    })

    test("can remove the item at the 0th index", () => {
      const list = LinkedList.fromValues(1, 2, 3);

      list.removeAt(0);

      expect(list.toArray()).toEqual([2, 3])
    })

    test("can remove an item at an index in the middle of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3);

      list.removeAt(1);

      expect(list.toArray()).toEqual([1, 3]);
    })

    test("can remove the final item in the list", () => {
      const list = LinkedList.fromValues(1, 2, 3);

      list.removeAt(2);

      expect(list.toArray()).toEqual([1, 2]);
    })
  })
})
