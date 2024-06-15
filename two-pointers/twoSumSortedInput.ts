const { log } = console
/* 
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
    The tests are generated such that there is exactly one solution. You may not use the same element twice.
    Your solution must use only constant extra space.
 */

const input = [2, 7, 11, 15],
    target = 9

const twoSum = (nums: number[], target: number): number[] => {
    let l = 0,
        r = nums.length - 1

    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum > target) r -= 1
        else if (sum < target) l += 1
        else return [l + 1, r + 1]
    }

    return []
}

const result = twoSum([2, 7, j11, 15], 9)
