function moveZeroesToEnd(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }
  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex++] = 0;
  }
  return arr;
}

console.log(moveZeroesToEnd([0, 1, 0, 3, 12]));
