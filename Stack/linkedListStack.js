class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // complexity - O(1)
  push(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tempNode = this.head;
      this.head = newNode;
      this.head.next = tempNode;
    }
    return ++this.size;
  }
  // complexity - O(1)
  pop() {
    if (!this.head) return null;
    const tempNode = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return tempNode.element;
  }
}
