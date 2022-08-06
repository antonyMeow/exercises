const array = [2,5436,12,7,8,54,3,235,134,565,4323,4564,324,421,24,44,0,0,0,0];

const result = mergeSort(array, 2);
console.log(result);

function mergeSort (arr, k) {
  if (arr.length < 2) return arr;
  if (arr.length <= k) return insertionSort(arr);

  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid), k);
  const rightArr = mergeSort(arr.slice(mid), k);

  return merge(leftArr, rightArr);


  function insertionSort (arr) {

    for (let i = 1; i < arr.length; i++) {
      let j = i;

      while (j > 0 && arr[j-1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j--;
      }
    }

    return arr;
  }

  function merge (leftArr, rightArr) {
    const arr = [];

    const n = leftArr.length;
    const m = rightArr.length;

    let i = 0, j = 0;

    while (i < n && j < m) {
      if (leftArr[i] < rightArr[j]) {
        arr.push(leftArr[i]);
        i++;
      }
      else {
        arr.push(rightArr[j]);
        j++;
      }
    }

    while (i < n) {
      arr.push(leftArr[i]);
      i++;
    }

    while (j < m) {
      arr.push(rightArr[j]);
      j++;
    }

    return arr;
  }

}