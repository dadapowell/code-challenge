class Editor {
    constructor () {
        this.state = []
    }
    
    get text() {
        return this.state[this.state.length - 1] || ""
    }
    
    append (s) {
        const text = this.text.concat(s)
        this.state.push(text)
    }
    
    remove (num) {
        const text = this.text.slice(0,-num)
        this.state.push(text)
    }
    
    undo () {
        this.state.pop()
    }
    
    print (num) {
        console.log(this.text[num-1])
    }
}

function processData(input) {
    //Enter your code here
    const editor = new Editor()
    const ops = input.split("\n").slice(1)
    ops.forEach(op => {
        const [operation, variable] = op.split(" ")
        switch (operation) {
            case "1":
                editor.append(variable)
                break
            case "2":
                editor.remove(variable)
                break
            case "3":
                editor.print(variable)
                break
            case "4":
                editor.undo()
                break
        }
    })
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
