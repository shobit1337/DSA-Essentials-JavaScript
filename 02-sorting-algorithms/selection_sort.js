// Sorting an array using Selection Sort Algorithm
const selection_sort = (arr) => {
  let n = arr.length;

  // Select every element and replace it with minumum element of un sorted array,
  // we leave the last element i.e n-1, It will be automatically sorted
  for (let pos = 0; pos < n - 2; pos++) {
    // Slecting a postion
    let current = arr[pos];
    let min_position = pos;

    // Finding the minimum array in the unsorted part of array
    for (let j = pos; j < n; j++) {
      if (arr[j] < arr[min_position]) {
        min_position = j;
      }
    }

    // Swapping the curent selected postion with minimum element
    if (pos != min_position) {
      arr[pos] = arr[min_position];
      arr[min_position] = current;
    }
  }
};

//Test
let arr = [-12, 23, 99, 6, 7, 6, -2, 0];
console.log(`Array: ${arr}`);
selection_sort(arr);
console.log(`Sorted Array: ${arr}`);

//Output
// Array: -12,23,99,6,7,6,-2,0
// Sorted Array: -12,-2,0,6,6,7,23,99
