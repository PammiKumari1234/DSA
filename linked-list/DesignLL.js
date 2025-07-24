// Design a LL, that will create a new node, initialize LL function with a LL object, add to head, add to tail, get teh value from i index, add at i index and delete from i index.

function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.getAtIndex = function(index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addToTail(val);
    return;
  }

  const newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

const list = new MyLinkedList();
list.addAtHead(10);
list.addToTail(20);
list.addToTail(30);
list.addAtHead(5);
list.addAtIndex(2, 6); // Insert 6 at index 2

console.log("Value at index 2:", list.getAtIndex(2)); // Output: 6

list.deleteAtIndex(2); // Delete value at index 2

console.log("After deletion:");
let curr = list.head;
while (curr) {
  console.log(curr.val); // Output: 5 → 10 → 20 → 30
  curr = curr.next;
}

