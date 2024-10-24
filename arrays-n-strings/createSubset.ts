const subsets = (nums: number[]): number[][] => {
    const result: number[][] = []

    const backtrack = (start: number, currentSubset: number[]) => {
        result.push([...currentSubset])

        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i])
            backtrack(i + 1, currentSubset)
            currentSubset.pop()
        }
    }
    backtrack(0, [])
    return result
}

const input = [1, 2]

console.log(subsets(input))
