/**
 * @param {string} input
 * @return {string} string containing letters and it repeated count appended
 */
const compressString = function (input: string): string {
    // Creates an empty list of strings that will contain
    // the result
    const compressed = <string[]>[]
    // Creates a var to contain each char count
    let count = 1
    // Creates a for loop to iterate over inputed string
    for (let i = 0; i < input.length; i++) {
        const next = i + 1
        if (input[i] === input[next]) {
            count++
        } else {
            if (count === 1) {
                // If count is one meaning its the first ocurrence of char
                // and next index value is different just push the value
                compressed.push(input[i])
            } else {
                // Push the current char with a number appended to its end as a string
                // representing the chars count
                compressed.push(input[i].concat(count.toString()))
            }
            // Reset the count to1
            count = 1
        }
    }
    // Returns the final result as a joint string
    return compressed.join("")
}

const string =
    "aabcccccaaaaaaaajjjjjjjfffffffeeeeeaaaaslllsdddeeeeeeeefffjjhhhhhhssssggggggg"
const result = compressString(string)

console.log(`Output: `, result)
