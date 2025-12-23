import { describe, test, expect } from "@jest/globals";
import Node from "../src/node";

describe("Node", () => {
  describe("toString()", () => {
    test("returns the node's value as a string", () => {
      const node = new Node(5);
      expect(node.toString()).toBe("( 5 ) ->");
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

  describe("secondSuccessor()", () => {
    test("returns null for a tail node", () => {
      const node = new Node(5);

      expect(node.secondSuccessor()).toBeNull();
    })

    test("returns null for a node with a single following node", () => {
      const node = new Node(5, new Node(10));

      expect(node.secondSuccessor()).toBeNull();
    })

    test("returns the second successor node when one exists", () => {
      const secondSuccessor = new Node(50);
      const node = new Node(5, new Node(10, secondSuccessor));

      expect(node.secondSuccessor()).toBe(secondSuccessor);
    })
  })
})
