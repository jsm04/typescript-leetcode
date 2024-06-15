const testTarget = 7
const nums = [3, 2, 4]

// Iterative brute force
const bruteForceTwoSum = (
    nums: number[],
    target: number,
): number[] | undefined => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return
}

// Complement
const twoSum = (nums: number[], target: number): number[] | undefined => {
    const map: Record<string, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i],
            complement = target - curr

        map[curr] = i

        if (map[complement] !== undefined) {
            return [map[complement], i]
        }
    }
    return
}

// Data structure
class TwoSum {
    private list: number[] = []

    public add(number: number): void {
        this.list.push(number)
    }

    public find(value: number): boolean {
        this.list.sort((a, b) => a - b)
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > value) break
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i] + this.list[j] === value) {
                    return true
                }
            }
        }
        return false
    }
}

console.log(twoSum(nums, testTarget))
