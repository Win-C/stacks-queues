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

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (this.last === null) this.last = newNode;
    if (this.first !== null) this.first.next = newNode;
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw Error("Error! The queue is empty.");

    let oldTop = this.first;
    let current = this.last;
    let prevNode = null;

    while (current !== null){
      if (current.val === oldTop.val){
        this.last = prevNode;
        this.size--;
      }
      prevNode = current;
      current = current.next;
    }

    if (this.size === 0) this.first = null;

    return oldTop.val;
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
