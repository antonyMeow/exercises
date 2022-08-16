const arr = [243,43,1,254,789,5,3,68,90,2,4,124,-342,-23,-1,325,-8,10];
const result = quicksort(arr);

console.log(result);

function quicksort (arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (var i = 1; i < arr.length; i++) 
    arr[i] < pivot ? less.push(arr[i]) : greater.push(arr[i]);

  return [...quicksort(less), pivot, ...quicksort(greater)];
}