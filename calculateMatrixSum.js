function calculateMatrixSum(matrix) {
    let sum = 0;   
    matrix.forEach(numbers => {
        sum += numbers.reduce((sum, number) => sum += number)
    })
    return sum;
  }