const factorial = n => n == 1 ? 1 : n * factorial(n - 1);

const gcd = (a, b) => a == 0 ? b : b == 0 ? a : gcd(b, a % b);

const sumOfArr = arr => arr.length == 0 ? 0 : arr.shift() + sumOfArr(arr);

const arrLength = arr => arr[0] ? arr.shift() * 0 + 1 + arrLength(arr) : 1;

const addBitArrays = (a, b) => [+(parseInt(a.join(""), 2) + parseInt(b.join(""), 2)).toString(2)];

console.log(factorial(5));
console.log(gcd(140, 12));
console.log(sumOfArr([10,10,10,10,10]));
console.log(arrLength([1,2,3,4,5]));
console.log(addBitArrays([1,0,1,1], [0,1,1,0]))