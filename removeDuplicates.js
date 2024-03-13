const removeDuplicates = (arr) => {
  arr.length === 0 ? 0 : 0; // if array is empty return 0
  let j = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
