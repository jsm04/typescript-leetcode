/* 
    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
 */

const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false
    const map = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        let temp = map.get(char)
        if (!temp) map.set(char, 1)
        else map.set(char, ++temp)
    }

    for (const char of t) {
        let temp = map.get(char)
        if (!temp) return false
        if (temp < 0) return false
        map.set(char, --temp)
    }
    return true
}

const result = isAnagram("anagram", "nagaram")

console.log("Output: ", result)
