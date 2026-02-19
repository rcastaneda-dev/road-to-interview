/**
 * Problem:
 * Write a function to merge our arrays of orders into one sorted array. For example:
 * const myArray = [3, 4, 6, 10, 11, 15];
 * const alicesArray = [1, 5, 8, 12, 14, 19];
 * console.log(mergeArrays(myArray, alicesArray));
 * // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
 * 
 * Solution:
 * First, we allocate our answer array, getting its size by adding the size of myArray and alicesArray.
 * We keep track of a current index in myArray, a current index in alicesArray, and a current index in mergedArray. 
 * So at each step, there's a "current item" in alicesArray and in myArray. 
 * The smaller of those is the next one we add to the mergedArray!
 *
 * But careful: we also need to account for the case where we exhaust one of our arrays
 * and there are still elements in the other. 
 * To handle this, we say that the current item in myArray is the next item to add to mergedArray 
 * only if myArray is not exhausted AND, either:
 * alicesArray is exhausted, or the current item in myArray is less than the current item in alicesArray
 * 
 * Tests:
 * let desc = 'both arrays are empty';
 * let actual = mergeArrays([], []);
 * let expected = [];
 * assertDeepEqual(actual, expected, desc);
 *
 * desc = 'first array is empty';
 * actual = mergeArrays([], [1, 2, 3]);
 * expected = [1, 2, 3];
 * assertDeepEqual(actual, expected, desc);
 *
 * desc = 'second array is empty';
 * actual = mergeArrays([5, 6, 7], []);
 * expected = [5, 6, 7];
 * assertDeepEqual(actual, expected, desc);
 */
function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];
  
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;
  
    while (currentIndexMerged < (myArray.length + alicesArray.length)) {
  
      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;
  
      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
  
        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;
  
        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }
  
      currentIndexMerged++;
    }
  
    return mergedArray;
  }