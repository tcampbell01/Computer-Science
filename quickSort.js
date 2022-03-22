// choose first item in array as pivot point
// create empty left array
// create empty right array

// loop over items
//   if items[i] less than pivot
//     push into left array
//   else
//     push into right

// run same logic again on left and right arrays
// return sorted left array + pivot + sorted right array

const quickSort = (arr) => {
    // don't quick-sort a small array; just return it immediately
    if (arr.length <= 1) {
      return arr;
    }
  
    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
      // push into different arrays based on value compared to pivot
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
  
    // merge the sorted arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
  };