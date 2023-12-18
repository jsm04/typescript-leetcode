/**
 * Find the index of a given target in a sorted list
 * @param {number[]} nums sorted list of numbers
 * @param {number} target target to searched
 * @return {number} if target is found returns index else -1
 *  */
const binarySearch = function (nums: number[], target: number): number {
    // Create two list pointers: one at the beginning of the list, and
    // at the end.
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            // If target is found in the middle of the list then return the index
            return mid;
        } else if (nums[mid] < target) {
            // Else if the number contained in the middle of the list is lower
            // that the target reasign left pointer to contain the greater half
            // of the list indexes
            left = mid + 1;
        } else {
            // While left is lower or equal that right (meaning target is
            // still posible in the given list)
            right = mid - 1;
        }
    }
    return -1;
};

const list = [-1, 0, 3, 5, 9, 12];
const result = binarySearch(list, 9);

console.log(`Output: `, result);
