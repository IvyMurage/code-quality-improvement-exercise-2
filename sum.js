const sum = numbers => {
    if(numbers.length === 0) return 0;
    return numbers.pop() + sum(numbers)
}