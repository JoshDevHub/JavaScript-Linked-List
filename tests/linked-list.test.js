import { describe, test, expect } from "@jest/globals";
import LinkedList from "../src/linked-list";

describe("LinkedList", () => {
  describe("head()", () => {
    test("returns `null` when there is no head node for the list", () => {
      const list = new LinkedList();

      expect(list.head()).toBeNull();
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

  describe("tail()", () => {
    test("returns the only value in a list with one element", () => {
      const list = new LinkedList();
      list.prepend(5);

      expect(list.tail()).toBe(5);
    })

    test("returns `null` for an empty list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBeNull();
    })

    test("returns the last value in a list with many items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);
    })
  })

  describe("append()", () => {
    test("adds the given item to the end of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);

      list.append(10);

      expect(list.tail()).toBe(10);
    })

    test("with an empty list, it adds a new item at the beginning and end of the list", () => {
      const list = new LinkedList();
      expect(list.head()).toBeNull();
      expect(list.tail()).toBeNull();

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

  describe("prepend()", () => {
    test("adds the given item to the beginning of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.head()).toBe(1);

      list.prepend(0);

      expect(list.head()).toBe(0);
    })

    test("with an empty list, it adds a new item to the end and beginning of the list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBeNull();
      expect(list.tail()).toBeNull();

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

  describe("size()", () => {
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

  describe("at()", () => {
    const list = LinkedList.fromValues(5, 10, 15, 20);

    test("returns the element at the given index", () => {
      expect(list.at(0)).toBe(5);
      expect(list.at(1)).toBe(10);
      expect(list.at(2)).toBe(15);
      expect(list.at(3)).toBe(20);
    })

    test("returns null for an index below 0", () => {
      expect(list.at(-1)).toBeNull();
    })

    test("returns null for an index above the length of the list", () => {
      expect(list.at(4)).toBeNull();
    })
  })

  describe("pop()", () => {
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

      test("makes the head node null", () => {
        expect(list.head()).toBe(1);

        list.pop();

        expect(list.head()).toBeNull();
      })

      test("decreases the size of the list by one", () => {
        expect(list.size()).toBe(1);

        list.pop();

        expect(list.size()).toBe(0);
      })
    })

    describe("with an empty list", () => {
      const list = new LinkedList();

      test("returns null", () => {
        expect(list.pop()).toBeNull();
      })

      test("it does not change the size of the list", () => {
        expect(list.size()).toBe(0);

        list.pop();

        expect(list.size()).toBe(0);
      })

      test("it does not change the head node", () => {
        expect(list.head()).toBeNull();

        list.pop();

        expect(list.head()).toBeNull();
      })
    })
  })

  describe("find()", () => {
    const list = LinkedList.fromValues(5, 10, 15, 20);

    test("returns the index of the element if it's in the list", () => {
      expect(list.find(5)).toBe(0);
      expect(list.find(10)).toBe(1);
      expect(list.find(15)).toBe(2);
      expect(list.find(20)).toBe(3);
    })

    test("returns null for an element that's not in the list", () => {
      expect(list.find(100)).toBeNull();
    })
  })
})
