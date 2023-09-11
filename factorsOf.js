function factorsOf (num) {
    let factor = 2
    // let factor = num - 1
    const arr = []

    while (factor < num) {
        let j = num / factor
        if (Number.isInteger(j)) {
            arr.push(factor)
        }
        factor++
    }

    
    console.log("factors: ", arr)
}
factorsOf(784)
