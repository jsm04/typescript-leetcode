/* 
    You are given an integer array height of length n. There are n vertical lines drawn 
    such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    Return the maximum amount of water a container can store.
    Notice that you may not slant the container.
    
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49.
    
*/

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const output = 49

const maxArea = (height: number[]): number => {
    let res = 0
    let l = 0,
        r = height.length - 1

    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r])
        res = Math.max(res, area)
        if (height[l] < height[r]) l += 1
        else r -= 1
    }

    return res
}

const result = maxArea(input)

console.log(result === output)
