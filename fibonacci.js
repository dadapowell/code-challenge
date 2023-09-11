function fibonacci (num) {
    let i = 0
    const arr = []
    while (i < num) {
        let j = 0
        if (i === 0 || i === 1) {
            j = i + 1
            arr.push(j)
        } else {
            j = arr[arr.length - 1] + arr[arr.length - 2]
            arr.push(j)
        }
        i = j
    }

    let evenIndex = 1
    let evenSum2 = 0
    while (evenIndex < arr.length) {
        evenSum2 += arr[evenIndex]
        evenIndex += 3
        console.log(evenIndex, arr[evenIndex])
    }

    const evenSum1 = arr.filter((item) => item % 2 === 0).reduce((a, b) => b + a)
    // const sum = arr.reduce((a, b) => b + a)
    console.log("sums: ", evenSum1, evenSum2)
}

fibonacci(4000000)