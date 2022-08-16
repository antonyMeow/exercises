const arr = [10, -2, 3, 6, -5, -1, 13, 4, -9, 8, 4, -2, -10, 5, 6, -1, -3];

const result = maxSubArraySum(arr, 0, arr.length - 1);
const bfResult = bruteForceMaxSubArraySum(arr);

console.log(result);
console.log(bfResult);

function maxSubArraySum (arr, l, h) {
  if (l > h) return Number.MIN_VALUE;
  if (l == h) return arr[l];

  const m = Math.trunc((l + h) / 2);

  const a = maxSubArraySum(arr, l, m - 1);
  const b = maxSubArraySum(arr, m + 1, h);
  const c = maxCrossingSum(arr, l, m, h);
          
  return maxOfThree(a, b, c);
}

function maxCrossingSum (arr, l, m, h) {
  let sum = 0;
  let leftSum = Number.MIN_VALUE;

  for (let i = m; i >= l; i--) {
    sum += arr[i];
    if (sum > leftSum) leftSum = sum;
  } 

  sum = 0;
  let rightSum = Number.MIN_VALUE;

  for (let i = m; i <= h; i++) {
    sum += arr[i];
    if (sum > rightSum) rightSum = sum;
  }

  const a = leftSum + rightSum - arr[m];

  return maxOfThree(a, leftSum, rightSum);
}

function maxOfThree (a, b, c) { return Math.max(Math.max(a, b), c); }



function bruteForceMaxSubArraySum (arr) {
  const n = arr.length;

  let max = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }
  }

  return max;
}