//Node
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
  }

  //Push data in the queue
  enqueue(element) {
    let node = new Node(element),
      current;

    //If head is empty then
    //Add the node at the beginning
    if (this.head === null) {
      this.head = node;
    } else {
      //Else add the node as the
      //Next element of the existing list
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    //Increase the length
    this.length++;
  }

  //Remove the item from the queue
  dequeue() {
    let current = this.head;

    //If there is item then remove it
    //and make the next element as the first
    if (current) {
      let element = current.element;
      current = current.next;
      this.head = current;
      this.length--;
      return element;
    }

    return null;
  }

  //Return the first element in the queue
  front() {
    if (this.head) {
      return this.head.element;
    }

    return null;
  }

  //Return the last element in the queue
  rear() {
    let current = this.head;

    //If head is empty
    //Return null
    if (current === null) {
      return null;
    }

    //Return the last elememnt
    while (current.next) {
      current = current.next;
    }

    return current.element;
  }

  //Convert the queue to an array
  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  }

  //Check if stack is empty
  isEmpty() {
    return this.length === 0;
  }

  //Return the size of the stack
  size() {
    return this.length;
  }

  //Clear the stack
  clear() {
    this.head = null;
    this.length = 0;
  }
}
