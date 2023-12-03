# Merge k Sorted Lists

This code snippet demonstrates how to merge k sorted linked lists into a single sorted linked list.

## Algorithm

1. Create an empty linked list `merge_list` to store the merged result.
2. Create a pointer `merge_list_current` to keep track of the current node in `merge_list`.
3. Create an empty array `temp_arr` to store the values of all nodes in the input linked lists.
4. Iterate through each linked list in the `lists` array.
   - For each linked list, iterate through all its nodes.
   - Push the value of each node into the `temp_arr` array.
5. Sort the `temp_arr` array in ascending order.
6. Iterate through each value in the `temp_arr` array.
   - Create a new node with the current value and append it to the `merge_list`.
   - Update the `merge_list_current` pointer to the newly added node.
7. Return the `next` node of the `merge_list`, which is the merged sorted linked list.

## Complexity Analysis

- Time complexity: O(NlogN), where N is the total number of nodes in all the linked lists.
- Space complexity: O(N), where N is the total number of nodes in all the linked lists.

## Code

``` JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
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
```
