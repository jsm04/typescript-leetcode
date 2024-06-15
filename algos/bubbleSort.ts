/* 
Bubble sort compares adjacent elements and swaps them if they are in the wrong order, gradually sorting the list.
 Despite its simplicity, its quadratic time complexity limits its practicality for larger datasets.
*/

const bubbleSort = function (arr: number[]): number[] {
    const length = arr.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90]
const sortedArray = bubbleSort(unsortedArray)
console.log("Sorted array:", sortedArray)
