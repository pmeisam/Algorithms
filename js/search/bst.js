/*
A Binary Search Tree is a type of tree data structure where each node has at most two children, with the left child 
being smaller and the right child being larger than the parent. The following is a simplified implementation of a 
BST in JavaScript, with explanations of the key methods:
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a value into the tree
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  // search for a value in the tree
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return current;
  }

  // breadth-first search
  bfs() {
    const queue = [];
    const visited = [];

    if (!this.root) return visited;

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  // depth-first search - pre-order traversal
  dfsPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  // depth-first search - in-order traversal
  dfsInOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  // depth-first search - post-order traversal
  dfsPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }
}

/*
The main difference between Breadth First Search (BFS) and Depth First Search (DFS) algorithms is in their approach to 
traversing a graph or a tree:

Breadth First Search (BFS): starts at the root node and visits all the nodes at the same level (i.e., siblings) before 
moving on to the next level. In other words, it explores all the nodes at distance k from the root node before exploring 
the nodes at distance k+1.

Depth First Search (DFS): explores a graph or tree by going as deep as possible in one branch before backtracking. It 
follows a path as far as it can before backtracking to the previous node and continuing down another path.

Another key difference between BFS and DFS is the way they store the visited nodes. BFS uses a queue to store the nodes 
to visit next, while DFS uses a stack (for the iterative approach) or the call stack (for the recursive approach) to keep 
track of the visited nodes.

In summary, BFS is a "wide" approach that visits nodes level by level, while DFS is a "deep" approach that explores as 
far as possible along each branch before backtracking.



There are three common DFS methods:

Pre-order DFS: In pre-order DFS, we visit the current node, then recursively traverse its left subtree, followed by 
its right subtree. This means we process the node before processing its children.

In-order DFS: In in-order DFS, we recursively traverse the left subtree, then visit the current node, followed by 
recursively traversing its right subtree. This means we process the node after processing its left child but before 
processing its right child.

Post-order DFS: In post-order DFS, we recursively traverse the left subtree, then recursively traverse the right subtree, 
and finally visit the current node. This means we process the node after processing its children.

The primary difference between these methods is the order in which nodes are visited. Depending on the problem, one method 
may be more appropriate than the others. For example, in-order DFS can be used to visit nodes in sorted order in a binary 
search tree.
*/
