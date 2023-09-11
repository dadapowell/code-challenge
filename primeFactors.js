function isPrime (num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

function largestPrimeFactor (num) {
    let factor = 2
    // let factor = num - 1
    const arr = []
    if (isPrime(num)) {
        console.log("largest prime factor: ", num)
    }
    // to improve time complexity, break the first recursion after finding the first prime factor
    // then, use the division method (recursion) to determine the remaining prime factors
    while (factor < num) {
        let j = num / factor
        if (Number.isInteger(j) && isPrime(factor)) {
            console.log("current factor: ", factor)
            arr.push(factor)
            const secondFactor = num / arr[0]
            largestPrimeFactor(secondFactor)
            break
        }
        factor++
    }

    
    // console.log("factors: ", arr)
}
// largestPrimeFactor(600851475143)
largestPrimeFactor(512)
