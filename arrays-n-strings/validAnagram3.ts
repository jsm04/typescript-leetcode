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

    const map = new Map<string, number>(),
        map2 = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        let s_current_char = map.get(s[i]),
            t_current_char = map2.get(t[i]);

        if (!s_current_char) map.set(s[i], 1);
        else map.set(s[i], ++s_current_char);

        if (!t_current_char) map2.set(t[i], 1);
        else map2.set(t[i], ++t_current_char);
    }

    for (const char of s) {
        if (map.get(char) !== map2.get(char)) return false;
    }

    return true;
};

const result = isAnagram("anagram", "nagaram");

console.log("Output: ", result);
