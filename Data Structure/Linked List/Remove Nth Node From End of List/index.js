class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let current = head;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
  }

  let removeItem = count - n;
  current = head;
  let previous = current;
  if (removeItem != 0) {
    while (current) {
      if (removeItem == 0) {
        previous.next = current.next;
      }
      removeItem--;
      previous = current;
      current = current.next;
    }
  } else {
    head = head.next;
  }
  return head;
};

const printList = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
};

let myList = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
printList(removeNthFromEnd(myList, 2));
