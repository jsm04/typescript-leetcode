const isUnique = function (str: string) {
    if (str.length > 128) return false;
    const charSet = new Array<boolean[]>(128);

    for (let i = 0; i < str.length; i++) {
        let value = str.charAt(i);
        if (charSet[value]) {
            return false;
        }
        charSet[value] = true;
    }
    return true;
};
