const array = [2,5436,12,7,8,54,3,235,134,565,4323,4564,324,421,24,44,0,0,0,0];

const result = selectionSort(array);
console.log(result);

function selectionSort (arr) {
  let unsortedArr = [...arr];
  let sortedArr = [];
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    smallest = findSmallest(unsortedArr);
    sortedArr.push(unsortedArr[smallest]);
    unsortedArr = unsortedArr.filter((value, index) => index != smallest);
  }
  return sortedArr;
}

function findSmallest (arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }  
  return smallestIndex;
}