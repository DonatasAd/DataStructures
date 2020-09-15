//Node
class Node {
  constructor(elm) {
    this.element = elm;
    this.next = null;
  }
}

class stackUsingLL {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //Push data in the stack
  push(elm) {
    //Create a new node
    let node = new Node(elm);
    let current;

    //Add the new node at the top
    current = this.head;
    node.next = current;
    this.head = node;

    this.length++;
  }

  pop() {
    let current = this.head;

    //If there is item then remove it
    //and make the next element as the first
    if (current) {
      let elm = current.element;
      current = current.next;
      this.head = current;
      this.length--;
      return elm;
    }

    return null;
  }

  //Return the first element in the stack
  peek() {
    if (this.head) {
      return this.head.element;
    }

    return null;
  }

  //Convert the stack to an array
  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}
