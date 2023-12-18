const isEditDistanceOne = (firstString: string, secondString: string) => {
    let A_len = firstString.length,
        B_len = secondString.length;

    if (Math.abs(A_len - B_len) > 1) return false;

    let count = 0;
    let A = 0,
        B = 0;

    while (A < A_len && B < B_len) {
        if (firstString[A] != secondString[B]) {
            if (A_len > B_len) A++;
            else if (A_len < B_len) B++;
            else {
                A++;
                B++;
            }
            count++;
        } else {
            A++;
            B++;
        }
    }

    if (A < A_len || B < B_len) count++;
    return count === 1;
};
let s1 = "gfgf";
let s2 = "gff";

console.log(isEditDistanceOne(s1, s2));
