# Postorder Traversal of Binary Tree

This code provides a solution to perform postorder traversal on a binary tree.

## Implementation

The code defines a class `Solution` with a method `postOrder` that takes the root of the binary tree as input and returns a list containing the postorder traversal of the tree.

The postorder traversal is performed recursively using a helper function `traversal`. The function visits the left subtree, then the right subtree, and finally adds the data of the current node to the `postorder` list.

## Example

```
        19
      /    \
     10     8
    /  \     \
   11  13     50
```

The postorder traversal visits the nodes in the following order: left subtree, right subtree, root.

1. Start at the root: 19.
2. Move to the left subtree: 10.
    Move to the left child: 11.
    Move to the left child: null (no left child).
    Move to the right child: null (no right child).
    Visit node 11.
    Move back up to node 10.
    Move to the right child: 13.
    Move to the left child: null (no left child).
    Move to the right child: null (no right child).
    Visit node 13.
    Move back up to node 10.
3. Move to the right child of the root: 8.
    Move to the left child: null (no left child).
    Move to the right child: 50.
    Move to the left child: null (no left child).
    Move to the right child: null (no right child).
    Visit node 50.
    Visit node 8.
4. Visit the root: 19.

So, the postorder traversal of the given binary tree is: [11, 13, 10, 50, 8, 19].





## Code

#### JavaScript

``` JavaScript []
class Solution {
  //Function to return a list containing the postorder traversal of the tree.
  postOrder(root) {
    const postorder = [];
    const traversal = (node) => {
      if (node == null) return;
      traversal(node.left);
      traversal(node.right);
      postorder.push(node.data);
    };

    traversal(root);
    return postorder;
  }
}
```