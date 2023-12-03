# Remove Nth Node From End of List

Given the `head` of a linked list, remove the `n th` node from the end of the list and return its head.

### Example 1:

![Remove Example1](./remove_ex1.jpg)

**Input :** `head = [1,2,3,4,5]`, `n = 2` and `Output: [1,2,3,5]`

### Example 2:

**Input :** `head = [1]`, `n = 1` and `Output: []`

### Example 3:

**Input :** `head = [1,2]`, `n = 1` and `Output: [1]`

# Solution

```
    /**
    * @param {ListNode} head
    * @param {number} n
    * @return {ListNode}
    */
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
        }
        else {
            head = head.next;
        }
        return head;
    };

```

This code snippet is an implementation of the `removeNthFromEnd` function, which removes the nth node from the end of a linked list. Let's break down the code step by step:

1. The function takes two parameters: `head`, which represents the head node of the linked list, and `n`, which indicates the position of the node to be removed from the end.
2. The code initializes a variable `current` with the value of `head`. This variable will be used to traverse the linked list.
3. Another variable `count` is initialized to 0. This variable will keep track of the number of nodes in the linked list.
4. A while loop is used to iterate through the linked list. Inside the loop, the `current` variable is updated to the next node, and the `count` variable is incremented by 1.
5. After the while loop, the variable `removeItem` is assigned the value of `count - n`. This represents the index of the node to be removed from the end of the linked list.
6. The `current` variable is reset to `head`, and a new variable `previous` is introduced and assigned the value of `current`. These variables will be used to keep track of the previous and current nodes while traversing the linked list.
7. An if statement checks if `removeItem` is not equal to 0. If it's not 0, it means the node to be removed is not the head node.
8. Inside the if statement, a while loop is used to traverse the linked list again. This time, it checks if `removeItem` is equal to 0. If it is, it means we have reached the node to be removed.
9. Inside the if statement of the second while loop, the `previous.next` pointer is updated to skip the current node and point to the next node, effectively removing the current node from the linked list.

10. After updating the `previous.next` pointer, the `removeItem` variable is decremented, and the `previous` and `current` variables are updated to their respective next nodes.

11. If the `removeItem` is equal to 0 in the first iteration of the second while loop, it means the node to be removed is the head node. In this case, the `head` variable is updated to `head.next`, effectively removing the head node from the linked list.

12. Finally, the function returns the updated `head` node of the linked list.