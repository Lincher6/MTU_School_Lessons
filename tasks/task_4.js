module.exports = (arr1, arr2) => {
    const numbers = {other: []};

    arr1.forEach(number => {
        if (arr2.includes(number)) {
            if (numbers[number]) {
                numbers[number].push(number);
            } else {
                numbers[number] = [number];
            }
        } else {
            numbers.other.push(number);
        }
    })

    const result = arr2.reduce((acc, number) => {
        acc.push(...numbers[number]);
        return acc;
    }, []);

    numbers.other = numbers.other.sort((a, b) => a - b);
    result.push(...numbers.other);
    return result;
}