/* 
    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
 */

const isAnagram = function (s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const list = new Uint8Array();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let temp = list[char];
        if (!temp) list[char] = 1;
        else list[char]++;
    }

    for (const char of t) {
        let temp = list[char];
        if (!temp) return false;
        if (temp < 0) return false;
        --list[char];
    }
    return true;
};

const result = isAnagram("anagram", "nagaram");

console.log("Output: ", result);
