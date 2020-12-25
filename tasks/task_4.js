module.exports = (arr1, arr2) => {
    arr1 = arr1.sort((a, b) => a - b)
    const numbers = {other: []}

    arr1.forEach(number => {
        if (binarySearch(arr2, number)) {
            if (numbers[number]) {
                numbers[number].push(number)
            } else {
                numbers[number] = [number]
            }
        } else {
            numbers.other.push(number)
        }
    })

    const result = arr2.reduce((acc, number) => {
        acc.push(...numbers[number])
        return acc
    }, [])

    result.push(...numbers.other)
    arr1.splice(0, arr1.length, ...result)
    return arr1
}


//optimization for big arrays
function binarySearch(arr, elem) {
    if (arr.length === 0) return false

    const midIndex = Math.floor(arr.length / 2)
    const mid = arr[midIndex]
    if (mid === elem) {
        return true
    } else if (mid > elem) {
        return binarySearch(arr.slice(0, midIndex), elem)
    } else {
        return binarySearch(arr.slice(midIndex + 1, arr.length), elem)
    }
}