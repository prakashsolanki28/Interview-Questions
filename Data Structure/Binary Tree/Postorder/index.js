class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

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

let root = new Node(
  19,
  new Node(10, new Node(11), new Node(13)),
  new Node(8, null, new Node(50))
);
let obj = new Solution();
let res = obj.postOrder(root);

console.log(res); // [ 11, 13, 10, 50, 8, 19 ]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Input:

//        19
//      /    \
//     10     8
//    /  \     \
//   11  13     50

// Output: 11 13 10 50 8 19

// Explanation:

// Postorder traversal (Left->Right->Root) of the tree is 11 13 10 50 8 19.

// Input:
//        1
//      /   \
//     4     2

// Output: 4 2 1

// Explanation:

// Postorder traversal (Left->Right->Root) of the tree is 4 2 1.

// Input:

//        19
//      /    \
//     10     8
//    /  \     \
//   11  13     50
//  /  \        /  \
// 12  15      60  70

// Output: 12 15 11 13 60 70 50 10 8 19

// Explanation:

// Postorder traversal (Left->Right->Root) of the tree is 12 15 11 13 60 70 50 10 8 19.
