function calculateAverage(numbers) {
return numbers.reduce((sum, number) => sum += number) / numbers.length
}