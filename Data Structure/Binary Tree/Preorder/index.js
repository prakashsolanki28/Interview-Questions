class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  //Function to return a list containing the preorder traversal of the tree.
  preorder(root) {
    const preorder = [];
    const traversal = (node) => {
      if (node == null) return;
      preorder.push(node.data);
      traversal(node.left);
      traversal(node.right);
    };

    traversal(root);
    return preorder;
  }
}
let root = new Node(
  10,
  new Node(20, new Node(40), null),
  new Node(30, null, new Node(50))
);
let obj = new Solution();
let res = obj.preorder(root);

console.log(res); // [ 10, 20, 40, 30, 50 ]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Input:
//        10
//      /    \
//     20     30
//    /  \     \
//   40   N     50

// Output: 10 20 40 30 50

// Explanation:

// Preorder traversal (Root->Left->Right) of the tree is 10 20 40 30 50.

// Input:
//        1
//      /   \
//     4     2

// Output: 1 4 2

// Explanation:

// Preorder traversal (Root->Left->Right) of the tree is 1 4 2.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:

// 1 <= Number of nodes <= 105
// 1 <= Data of a node <= 105
