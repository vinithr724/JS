function rotateArrayLeft(arr, x) {
  let n = arr.length;
  let rotatedArray = new Array(n);
  for (let i = 0; i < n; i++) {
    rotatedArray[i] = arr[(i + x) % n];
  }
  return rotatedArray;
}

console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 2));
