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
    constructor(value, freq, left = null, right = null) {
        this.value = value
        this.freq = freq
        this.left = left
        this.right = right
    }
    
}

function processData(input) {
    //Enter your code here
    
    // calculate the frequency of each letter
    const freq = {}
    for (let i = 0; i<input.length; i++) {
        const val = input[i]
        if (freq[val]) {
            freq[val]++
        } else {
            freq[val] = 1
        }
    }
    
    const unsorted = input.split("")
    // sort from least to most frequent
    unsorted.sort((a, b) => freq[a] - freq[b])
    // create a set, i.e. unique values
    const sortedSet = new Set(unsorted)
    // convert back to array
    let sorted = Array.from(sortedSet)
    
    // create the huffman tree
    while (sorted.length > 1) {
        const lowestVals = sorted.slice(0, 2)
        sorted = sorted.slice(2)
        let child1 = undefined
        let child2 = undefined
        
        if (typeof lowestVals[0] === "string") {
            child1 = new Node(lowestVals[0], freq[lowestVals[0]])
        } else {
            child1 = lowestVals[0]
        }
        
        if (typeof lowestVals[1] === "string") {
            child2 = new Node(lowestVals[1], freq[lowestVals[1]])
        } else {
            child2 = lowestVals[1]
        }
        
        const combinedFreq = child1.freq + child2.freq

        let internal = undefined
        if (child1.freq <= child2.freq) {
            internal = new Node(null, combinedFreq, child1, child2)
        } else {
            internal = new Node(null, combinedFreq, child2, child1)
        }
        
        // queue
        sorted.unshift(internal)
        
    }
        
    // traverse tree postorder to encode
    let encodedChar = ''
    const chars = {}
    
    const postorder = root => {
        if (root.left || root.right) {
            // not a leaf
            encodedChar += '0'
            postorder(root.left)
            // we are moving "up" one level to check right side
            // so remove the last character of the encoded string
            encodedChar = encodedChar.slice(0, encodedChar.length - 1)
            encodedChar += '1'
            postorder(root.right)
            // moving "up" one level again after checking right side
            // so remove the last character again
            encodedChar = encodedChar.slice(0, encodedChar.length - 1)
        } else if (root) {
            // a leaf
            chars[root.value] = encodedChar
        }

    }
    
    postorder(sorted[0])
    
    // console.log("TREE: ", sorted[0])
    // console.log("ENCODED: ", chars)
    const result = input.split("").map(val => chars[val]).join("")
    console.log(result)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
