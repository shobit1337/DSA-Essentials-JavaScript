// Using Binary Search to find a element in an array
// Detailed Blog: https://shobit.hashnode.dev/binary-search-in-javascript

// Approach #1 Using Iterative Approach
const binary_search_iterative = (arr, key) => {
  // set start and low indexes
  let start = 0;
  let end = arr.length - 1;

  // Loop till there elements needs to be searched in collection
  while (start <= end) {
    // Get the mid
    let mid = Math.ceil((start + end) / 2);

    // If found return the index
    if (arr[mid] === key) {
      return mid;
    }

    // If value is less
    // Then search in lower range
    if (key < arr[mid]) {
      end = mid - 1;
    } else {
      // Else search in upper range
      start = mid + 1;
    }
  }

  // If not found return -1
  return -1;
};

// Approach #2 Using Binary Approach
const binary_search_recursive = (arr, key, start = 0, end = arr.length - 1) => {
  //Search if the array exists
  if (start <= end) {
    //Get the mid
    let mid = Math.ceil((start + end) / 2);

    //If element found
    //Return its index
    if (key == arr[mid]) {
      return mid;
    }

    //If value is less
    //Then search in the lower range
    if (key < arr[mid]) {
      return binary_search_recursive(arr, key, start, mid - 1);
    } else {
      //Else search in greater range
      return binary_search_recursive(arr, key, mid + 1, end);
    }
  }

  // If not found return -1
  return -1;
};

// Test
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search_iterative(arr, 9));
console.log(binary_search_iterative(arr, 15));

console.log(binary_search_recursive(arr, 9));
console.log(binary_search_recursive(arr, 15));

// Outputs:
// From binary_search_iterative method
// 8
// -1

// From binary_search_recursive method
// 8
// -1
