const insertionSort = function (arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        let L = i - 1
        while (L >= 0 && arr[L] > curr) {
            arr[L + 1] = arr[L]
            L--
        }
        arr[L + 1] = curr
    }
    return arr
}
/* 
    [5, 3, 8, 4, 2]
    [3, 5, 8, 4, 2]
*/

// Example usage:
const arrayToSort: number[] = [5, 3, 8, 4, 2]
const sortedArray: number[] = insertionSort(arrayToSort)
console.log(sortedArray) // Output: [2, 3, 4, 5, 8]
