# Preorder Traversal of Binary Tree

This code snippet demonstrates how to perform a preorder traversal of a binary tree.

## Problem Statement

Given a binary tree, we need to return a list containing the preorder traversal of the tree.

#### Example 1:

**Input:**
```
    1  
   /  
  4  
 / \  
4   2
```

**Output:** 1 4 4 2

## Approach

We can perform a preorder traversal recursively by following these steps:

1. Create an empty list to store the preorder traversal.
2. Start from the root node.
3. If the current node is null, return.
4. Add the data of the current node to the preorder list.
5. Recursively perform a preorder traversal on the left subtree.
6. Recursively perform a preorder traversal on the right subtree.

## Implementation

The code snippet provides a `Node` class to represent a node in the binary tree and a `Solution` class with a `preorder` method to perform the preorder traversal.

To use the code, create a binary tree by instantiating `Node` objects and connecting them using the `left` and `right` properties. Then, create an instance of the `Solution` class and call the `preorder` method, passing the root node of the binary tree as the argument. The method will return a list containing the preorder traversal of the tree.

## Example

1. Binary Tree Structure:

```
    1  
   /  
  4  
 / \  
4   2
```

The binary tree has a root node with the value 1. It has a left subtree with the value 4 and two child nodes with values 4 and 2. The right subtree is empty.

2. Calling the preorder Method:

   const result = solution.preorder(root);

   The preorder method is called with the root of the binary tree (root) as an argument.

3. Execution of preorder Method:

   1. The preorder array is initialized as an empty array.
   2. The traversal function is called with the root node.
   3. The data of the root node (1) is pushed into the preorder array.
   4. The traversal function is called recursively on the left subtree (4).
   5. The data of the left child node (4) is pushed into the preorder array.
   6. The traversal function is called recursively on the left subtree of the left child node (4). Since both left and right are null, the function returns.
   7. The traversal function is called recursively on the right subtree of the left child node (4). Since both left and right are null, the function returns.
   8. The traversal function is called recursively on the right subtree of the root (2).
   9. The data of the right child node (2) is pushed into the preorder array.

4. Result:
    The result array now contains the elements of the binary tree in preorder traversal order: [1, 4, 4, 2].

## Code

#### JavaScript

``` JavaScript []
class Solution {
    inOrder(root) {
        const inorderData = [];
        const traversal = (node) => {
            if(node==null) return;
            traversal(node.left);
            inorderData.push(node.data);
            traversal(node.right);
        }

        traversal(root);
        return inorderData;
    }
}
```
