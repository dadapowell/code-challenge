function longestUniqueSubstring (input) {
    const uniqueChars = []
    input.split("").forEach(i => !uniqueChars.includes(i) ? uniqueChars.push(i) : null)
    console.log(uniqueChars)
    const substring = input
    return substring
}

longestUniqueSubstring("abbbcabcdefef")