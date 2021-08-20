// Performing Linear Search to fine key in an array with n elements

const linear_search = (arr, n, key) => {
  for (i = 0; i < n; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
};

// Time: O(n)
// Space: O(1)

//Test
let arr = [23, 12, 43, 657, 97, 56, 23, 65];
let search = linear_search(arr, arr.length, 12);

// Print Search Result
console.log(search != -1 ? `Found at ${search} index` : "Not Found");
