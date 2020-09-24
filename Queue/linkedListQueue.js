class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Push data in the queue
  // complexity - O(1)
  enqueue(element) {
    let newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.length++;
  }

  //Remove the item from the queue
  // complexity - O(1)
  dequeue() {
    if (!this.head) return null;
    let temp = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return temp.element;
  }
}
