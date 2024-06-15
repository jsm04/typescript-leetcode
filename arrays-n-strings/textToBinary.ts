const textToBinary = function (text: string) {
    const binaryCharList: string[] = []

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i)
        const binaryChar = charCode.toString(2)
        binaryCharList.push(binaryChar)
    }
    return binaryCharList.join(" ")
}

console.log(textToBinary("somethingToSay"))
