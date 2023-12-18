const compressString = function (input: string): string {
    const compressed = <string[]>[];
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        const next = i + 1;
        if (input[i] === input[next]) {
            count++;
        } else {
            if (count === 1) {
                compressed.push(input[i]);
            } else {
                compressed.push(input[i].concat(count.toLocaleString()));
            }
            count = 1;
        }
    }
    return compressed.join("");
};
console.log(
    compressString(
        "aabcccccaaaaaaaajjjjjjjfffffffeeeeeaaaaslllsdddeeeeeeeefffjjhhhhhhssssggggggg",
    ),
);
