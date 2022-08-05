const array = [1,2,3,4,5,6,7,8,9,10];

const result = binarySearch(array, 2);
console.log(result);

function binarySearch (arr, num) {
  let low = 0;
  let high = arr.length - 1;
  let mid, guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];
    if (guess == num) return mid;
    else if (guess > num) high = mid - 1;
    else low = mid + 1;
  }
  
  return null;
}