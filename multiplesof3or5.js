function multiplesof3or5 (num) {
    let i = 0
    const arr = []
    while (i < num) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
        i++
    }
    const sum = arr.reduce((a, b) => b + a)
    console.log(sum)
}

multiplesof3or5(1000)