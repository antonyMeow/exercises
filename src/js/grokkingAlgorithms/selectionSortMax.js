const array = [243,43,1,254,789,5,3,68,90,2,4,124,-342,-23,-1,325,-8,10];

const result = selectionSort(array);
console.log(result);

function selectionSort (arr) {
  let sorted = [];
  let unsorted = copy(arr);
  let max, maxIndex;

  for (let i = 0; i < arr.length; i++) {
    max = findMax(unsorted);
    sorted.push(unsorted[max]);
    unsorted = deleteItem(unsorted, max);
  }
  
  return sorted;
}

function findMax (arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

function copy (arrFrom) {
  let newArr = [];

  for (let i = 0; i < arrFrom.length; i++) 
    newArr[i] = arrFrom[i];

  return newArr;
}

function deleteItem (arr, index) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != index) newArr.push(arr[i]);
  }

  return newArr;
}