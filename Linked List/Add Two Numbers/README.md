# Add Two Numbers - Linked List

Problem -

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

![alt text](https://github.com/prakashsolanki28/linked-list/blob/main/1.%20Add%20Two%20Numbers/addtwonumber.jpg?raw=true)

- Input: l1 = [2,4,3], l2 = [5,6,4]
- Output: [7,0,8]
- Explanation: 342 + 465 = 807.

Example 2:

- Input: l1 = [0], l2 = [0]
- Output: [0]

Example 3:

- Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
- Output: [8,9,9,9,0,0,0,1]

Solution -

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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

        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }

    if (carry != 0) {
        current.next = new ListNode(carry);
        current = current.next;
    }

    return linklist_is.next;
};
```

Approach

1. Initialize a dummy node (linklist_is) to simplify the handling of the result linked list.
2. Use a current pointer to traverse and build the result linked list.
3. Iterate through the input linked lists (l1 and l2) simultaneously, adding corresponding node values along with the carry from the previous operation.
4. Update the carry for the next iteration based on the total sum.
5. Create a new node with the value being the remainder of the total sum when divided by 10, and move the current pointer to the next node in the result linked list.
6. If either of the input linked lists has additional nodes, move to the next node.
7. If there is a carry left after the iteration, create an additional node with the carry.
8. Return the next node of the dummy node (linklist_is.next), which contains the head of the result linked list.

Complexity -

`Time complexity:`

Time complexity: O(max(n, m)), where n and m are the lengths of the input linked lists (l1 and l2). The algorithm iterates through the linked lists once.

`Space complexity:`

Space complexity: O(max(n, m)), where n and m are the lengths of the input linked lists (l1 and l2). The space is used to store the result linked list, and the maximum length is the length of the longer input linked list.
