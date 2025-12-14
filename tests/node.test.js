import { describe, test, expect } from "@jest/globals";
import Node from "../src/node";

describe("Node", () => {
  describe("toString()", () => {
    test("returns the node's value as a string", () => {
      const node = new Node(5);
      expect(node.toString()).toBe("5");
    })
  })

  describe("isEqual()", () => {
    test("returns true when the node's value equals the given node's value", () => {
      const node = new Node(5);
      const otherNode = new Node(5);

      expect(node.isEqual(otherNode)).toBe(true);
    })

    test("returns false when the node's value doesn't equal the given node's value", () => {
      const node = new Node(5);
      const otherNode = new Node(10);

      expect(node.isEqual(otherNode)).toBe(false);
    })

    test("returns false when the comparison object isn't a `Node`", () => {
      const node = new Node(5);
      const obj = { value: 5 }

      expect(node.isEqual(obj)).toBe(false);
    })
  })

  describe("isTail()", () => {
    test("returns true when the node is not pointing to another node", () => {
      const node = new Node(5);

      expect(node.isTail()).toBe(true)
    })

    test("returns false when the node is pointing to another node", () => {
      const node = new Node(5, new Node(6));

      expect(node.isTail()).toBe(false)
    })
  })
})
