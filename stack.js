"use strict";

// const LinkedList = require("../dsa-arrays-linked-lists");

/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  first = null;
  last = null;
  size = 0;
  _array = new Array();

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    this._array.push(newNode);
    this.size = this._array.length;
    this.first = this._array[this.size-1];
    this.last = this._array[0];
    
    // if (this.last === null) this.last = newNode;
    // if (this.first !== null) this.first.next = newNode;
    // this.first = newNode;
    // this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw Error("Error! The queue is empty.");

    let removedNode = this._array.pop();
    this.size = this._array.length;
    this.first = this._array[this.size];
    this.last = this._array[0];
    return removedNode.val;

    // let oldTop = this.first;
    // let current = this.last;
    // let prevNode = null;

    // while (current !== null){
    //   if (current.val === oldTop.val){
    //     this.last = prevNode;
    //     this.size--;
    //   }
    //   prevNode = current;
    //   current = current.next;
    // }

    // if (this.size === 0) this.first = null;

    // return oldTop.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
