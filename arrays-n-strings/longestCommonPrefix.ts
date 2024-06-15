/*
    Constraints:
        1 <= strs.length <= 200
        0 <= strs[i].length <= 200
        strs[i] consists of only lowercase English letters.
        
    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
*/

const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) return ""
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const curr = strs[i]

        while (curr.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") break
        }
    }
    return prefix
}

const input = ["flower", "flow", "flight"]
const output = "fl"

console.log(longestCommonPrefix(input) === output)
