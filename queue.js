"use strict";

const LinkedList = require("../dsa-arrays-linked-lists");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList();

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // let newNode = new Node(val);

    // if (this.first === null) this.first = newNode;
    // if (this.last !== null) this.last.next = newNode;
    // this.last = newNode;

    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw Error("Error! The queue is empty.");

    // let oldFront = this.first;
    // let newFront = this.first.next;

    // this.first = newFront;
    this.size--;

    // // If queue becomes a size of 0 or 1, set last value equal to first value
    // if (this.size <= 1) this.last = newFront;
    
    // return oldFront.val;

    let removedNode = this._list.shift();
    this.first = this._list.head;
    this.last = this._list.tail;
    return removedNode;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
