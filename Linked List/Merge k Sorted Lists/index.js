class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

var mergeKLists = function (lists) {
  let merge_list = new ListNode(null);
  let merge_list_current = merge_list;
  let temp_arr = [];
  for (let i = 0; i < lists.length; i++) {
    let current = lists[i];
    while (current) {
      temp_arr.push(current.val);
      current = current.next;
    }
  }

  temp_arr.sort((a, b) => a - b);
  for (let i = 0; i < temp_arr.length; i++) {
    merge_list_current.next = new ListNode(temp_arr[i]);
    merge_list_current = merge_list_current.next;
  }

  return merge_list.next;
};

let lists = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
];

console.log(mergeKLists(lists));
