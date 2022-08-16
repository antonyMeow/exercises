const arr = [243,43,1,254,789,5,3,68,90,2,4,124,-342,-23,-1,325,-8,10];
const result = insertionSort(arr);

console.log(result);

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j-1] > arr[j]) {
      const key = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = key;
      j--;
    }
  }
  
  return arr;
}