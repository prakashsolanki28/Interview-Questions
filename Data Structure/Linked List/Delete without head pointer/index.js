class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

let list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

function deleteNode(node) {
  node.data = node.next.data;
  node.next = node.next.next;
}

deleteNode(list.next.next);
console.log(list);