//  Sorting an array using Insertion Sort Algorithm
const insertion_sort = (arr) => {
  let n = arr.length;
  for (let i = 1; i <= n - 1; i++) {
    // Saving the current value
    let current = arr[i];
    let previous = i - 1;

    // Comparing the current with every previous sorted place
    while (previous >= 0 && arr[previous] > current) {
      arr[previous + 1] = arr[previous];
      previous = previous - 1;
    }
    // Finally placing our saved element current to its sorted place.
    arr[previous + 1] = current;
  }
};

//Test
let arr = [-12, 23, 99, 6, 7, 6, -2, 0];
console.log(`Array: ${arr}`);
insertion_sort(arr);
console.log(`Sorted Array: ${arr}`);

//Output
// Array: -12,23,99,6,7,6,-2,0
// Sorted Array: -12,-2,0,6,6,7,23,99
