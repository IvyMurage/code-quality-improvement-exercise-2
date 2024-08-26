const reverseVowels = string => {
    const vowels = ["a", "e", "i", "o", "u"]
    const letters = string.split("").filter(letter =>
        vowels.includes(letter.toLowerCase())).reverse()
    return [...string].map(letter =>
        vowels.includes(letter.toLowerCase()) ? letters.shift() : letter).join('')
}