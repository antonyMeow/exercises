const factorial = n => n == 1 ? 1 : n * factorial(n - 1);

const gcd = (a, b) => a == 0 ? b : b == 0 ? a : gcd(b, a % b);

const sumOfArr = arr => arr.length == 0 ? 0 : arr.shift() + sumOfArr(arr);

console.log(factorial(5));
console.log(gcd(140, 12));
console.log(sumOfArr([10,10,10,10,10]));