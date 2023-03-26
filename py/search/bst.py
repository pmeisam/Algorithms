class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        newNode = Node(val)
        if not self.root:
            self.root = newNode
        else:
            current = self.root
            while True:
                if val < current.val:
                    if not current.left:
                        current.left = newNode
                        return
                    current = current.left
                else:
                    if not current.right:
                        current.right = newNode
                        return
                    current = current.right

    def bfs(self):
        if not self.root:
            return []

        queue = [self.root]
        result = []

        while queue:
            node = queue.pop(0)
            result.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return result

    def dfs_preorder(self):
        def traverse(node):
            if not node:
                return []
            result.append(node.val)
            traverse(node.left)
            traverse(node.right)

        result = []
        traverse(self.root)
        return result

    def dfs_inorder(self):
        def traverse(node):
            if not node:
                return []
            traverse(node.left)
            result.append(node.val)
            traverse(node.right)

        result = []
        traverse(self.root)
        return result

    def dfs_postorder(self):
        def traverse(node):
            if not node:
                return []
            traverse(node.left)
            traverse(node.right)
            result.append(node.val)

        result = []
        traverse(self.root)
        return result


"""

In this implementation, the Node class represents a node in the binary search tree, with a val attribute, as well as left and right attributes 
for its left and right child nodes. The BinarySearchTree class represents the tree itself, with a root attribute pointing to the root node.

The insert method allows for adding new nodes to the tree in the correct location based on their value. The bfs method performs a breadth-first 
search traversal of the tree, visiting nodes at each level before moving on to the next level. The dfs_preorder, dfs_inorder, and dfs_postorder 
methods perform depth-first search traversals of the tree, visiting nodes in a specific order depending on their location in the tree.

Overall, this implementation provides a simple way to create and search a binary search tree in Python.


"""
