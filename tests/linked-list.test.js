import { describe, test, expect } from "@jest/globals";
import LinkedList from "../src/linked-list";

describe("LinkedList", () => {
  describe("head()", () => {
    it("returns `null` when there is no head node for the list", () => {
      const list = new LinkedList();

      expect(list.head()).toBeNull();
    })

    it("returns the head node's value when there is a head node for the list", () => {
      const list = new LinkedList();
      list.prepend(5);
      expect(list.head()).toBe(5);

      list.prepend(10);
      expect(list.head()).toBe(10);
    })

    it("returns the first node's value when constructed from a list of values", () => {
      const list = LinkedList.fromValues(2, 4, 6, 8);
      expect(list.head()).toBe(2)
    })
  })

  describe("tail()", () => {
    it("returns the only value in a list with one element", () => {
      const list = new LinkedList();
      list.prepend(5);

      expect(list.tail()).toBe(5);
    })

    it("returns `null` for an empty list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBeNull();
    })

    it("returns the last value in a list with many items", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);
    })
  })

  describe("append()", () => {
    it("adds the given item to the end of the list", () => {
      const list = LinkedList.fromValues(1, 2, 3, 4, 5);
      expect(list.tail()).toBe(5);

      list.append(10);

      expect(list.tail()).toBe(10);
    })

    it("with an empty list, it adds a new item at the beginning and end of the list", () => {
      const list = new LinkedList();
      expect(list.head()).toBeNull();
      expect(list.tail()).toBeNull();

      list.append(1);

      expect(list.head()).toBe(1);
      expect(list.tail()).toBe(1);
    })

    it("increases the size of the list by one", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);

      list.append(10);

      expect(list.size()).toBe(1);
    })
  })
})
