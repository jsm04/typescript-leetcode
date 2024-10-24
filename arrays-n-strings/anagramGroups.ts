/* 
Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const resultMap = new Map<number, string[]>()
        const tmp: string[][] = []

        for (const str of strs) {
            let count = 0

            for (const letter of str) {
                if (letter) count += letter.charCodeAt(0)
                else count -= 1
            }

            if (count != 0) {
                const key = resultMap.get(count)
                if (!key) {
                    resultMap.set(count, [str])
                } else {
                    key.push(str)
                }
            }
        }

        for (const [_, value] of resultMap) {
            tmp.push(value)
        }
        return tmp
    }
}

const result = new Solution().groupAnagrams([
    "act",
    "pots",
    "tops",
    "cat",
    "stop",
    "hat",
])

console.log(result)
/*
Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters. 
*/
