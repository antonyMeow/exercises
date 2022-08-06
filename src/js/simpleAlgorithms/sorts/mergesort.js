const array = [2,5436,12,7,8,54,3,235,134,565,4323,4564,324,421,24,44,0,0,0,0];

const result = mergeSort(array);
console.log(result);

function mergeSort(arr){
  if(arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  
  return sorting(leftArr,rightArr);
}

function sorting(leftArr, rightArr) {
  const result = [];

  const n = leftArr.length;
  const m = rightArr.length;
  
  let i=0;
  let j=0;
  
  while(i < n && j < m) {
    if(leftArr[i] < rightArr[j]){
      result.push(leftArr[i]);
      i++;
    } 
    else {
      result.push(rightArr[j]);
      j++;
    }
  }

  while(i < n) {
    result.push(leftArr[i]);
    i++;
  }
  
  while(j < m){
    result.push(rightArr[j]);
    j++;
  }    
  
  return result;
}