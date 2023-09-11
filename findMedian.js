function findMedian (arr) {
  arr.sort();
  const l = arr.length - 1;
  console.log(arr, arr[l/2]);
}

findMedian([2,5,8,2,8,5,3,9,6,3,4,6,3,1,2,1,2,3,7,1,0]);