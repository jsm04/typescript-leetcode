const { log } = console;

/* 
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
    Notice that the solution set must not contain duplicate triplets
    
    ? Input: nums = [-1,0,1,2,-1,-4]
    ? Output: [[-1,-1,2],[-1,0,1]]
*/

const input = [-1, 0, 1, 2, -1, -4];

const output = [
    [-1, -1, 2],
    [-1, 0, 1],
];

const threeSum = (nums: number[]): number[][] => {
    const res: number[][] = [];
    // sort and mutate given array from lower to higher
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        // omit if first index and skip next value if is the same as current
        if (i > 0 && val === nums[i - 1]) continue;
        // create to pointers: left if next of index, right is last index
        let l = i + 1,
            r = nums.length - 1;

        while (l < r) {
            // create sum
            const sum = val + nums[l] + nums[r];
            // evaluate sum result and reassign pointer values accordingly
            if (sum > 0) r -= 1;
            else if (sum < 0) l += 1;
            else {
                // push current solution
                res.push([val, nums[l], nums[r]]);
                //
                l += 1;
                while (nums[l] === nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }
    }
    return res;
};

const result = threeSum(input);
console.log(`$ ~ result =`, result);
log(result === output);
