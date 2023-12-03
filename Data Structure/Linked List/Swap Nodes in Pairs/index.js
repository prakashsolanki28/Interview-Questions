class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

const swapPairs = (head) => {
  if (!head || !head.next) return head;
  let p = head.next;
  head.next = swapPairs(p.next);
  p.next = head;
  return p;
};
const display = (head) => {
  let p = head;
  while (p) {
    console.log(p.val);
    p = p.next;
  }
};

// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
let head = new ListNode(null);
let list = swapPairs(head);

display(list);
