class Tree {
    constructor(root = null) {
        this.root = root
    }
    
    // top down
    insert (value, node = this.root) {
        if (node === null) {
            node = new Node(value)
        } else if (value < node.value) {
            if (node.left === null) {
                node.left = new Node(value)
            } else {
                this.insert(node.left)
            }
        } else if (value > node.value) {
            if (node.right === null) {
                node.right = new Node(value)
            } else {
                this.insert(node.right)
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    
}