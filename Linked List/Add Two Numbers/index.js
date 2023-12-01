class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let linklist_is = new ListNode();
  let current = linklist_is;
  let carry = 0;

  while (l1 != null || l2 != null) {
    let val1 = l1 != null ? l1.val : 0;
    let val2 = l2 != null ? l2.val : 0;

    let total = val1 + val2 + carry;
    carry = Math.floor(total / 10);
    current.next = new ListNode(total % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry != 0) {
    current.next = new ListNode(carry);
    current = current.next;
  }

  return linklist_is.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
