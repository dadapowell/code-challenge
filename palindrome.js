function isPalindrome (num) {
    const str = num.toString()
    const arr = str.split("")
    const reverseArr = arr.map((_, i, ar) => ar[ar.length - (i+1)])

    return arr.join('') === reverseArr.join('')
}

function largestPalindrome () {
    // largest palindrome from product of two 3-digit numbers
    let num = 100
    let max = 999
    const arr = []
    
    while (num <= max) {
        for (let i = num; i < max; i++) {
            const possiblePalindrome = i * max
            if (isPalindrome(possiblePalindrome)) {
                arr.push(possiblePalindrome)
            }
        }
        max--
    }
    
    console.log("largest palindrome: ", arr.sort((a, b) => b - a)[0])
}
// isPalindrome(90109)
largestPalindrome()
