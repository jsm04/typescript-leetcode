const addTwoNumbes = function (jewels: string, stones: string): number {
    const jewelSet = new Set()

    for (let i = 0; i < jewels.length; i++) {
        jewelSet.add(jewels.charAt(i))
    }

    let answer = 0

    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones.charAt(i))) answer++
    }

    return answer
}
