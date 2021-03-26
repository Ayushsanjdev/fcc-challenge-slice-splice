function frankenSplice(arr1, arr2, n) {
  let slicedArr = arr2.slice(); //sliced all indexes of into a new var;
  slicedArr.splice(n, 0, ...arr1); //then spliced the slicedArr at n index and at 0 and add the rest of arr1.
  return slicedArr; //finally return the slicedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));    //  [4, 1, 2, 3, 5, 6]
