/*
    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
*/

const longestCommonPrefix = function (strs: string[]): string {
    if (strs.length === 0) return "";
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const curr = strs[i];

        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") break;
        }
    }
    return prefix;
};

const input = ["flower", "flow", "flight"];
const output = "fl";

console.log(longestCommonPrefix(input) === output);

/*
Explanation: There is no common prefix among the input strings.
Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
*/

/*
 var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]; // Initialize prefix as the first string

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // Reduce prefix length until it matches
            if (prefix === "") return "";
        }
    }

    return prefix;
};
 */
