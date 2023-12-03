class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var rotateRight = function (head, k) {
  let nums = [],
    temp_arr = [];
  let current = head;

  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < nums.length; i++) {
    temp_arr[(i + k) % nums.length] = nums[i];
  }

  let rotate_list = new ListNode(null);
  current = rotate_list;
  for (let i = 0; i < temp_arr.length; i++) {
    current.next = new ListNode(temp_arr[i]);
    current = current.next;
  }

  return rotate_list.next;
};

const display = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

let head = new ListNode(
  new ListNode(new ListNode(new ListNode(new ListNode(null, 21), 17), 11), 23),
  17
);

display(rotateRight(head, 2)); // 11 -> 23 -> 17 -> 21 -> 17
