module.exports = (value) => {
    const letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    if (typeof value !== 'string') {
        throw new Error('Value is not a string');
    } else if (value.length > 15) {
        throw new Error('Roman number is too big');
    } else if (value.length === 0) {
        throw new Error('Value is empty');
    } else if (value.split('').some(letter => !letters.includes(letter))) {
        throw new Error('Not a roman number');
    }


    const digits = {
        CM: 900,
        M: 1000,
        CD: 400,
        D: 500,
        XC: 90,
        C: 100,
        XL: 40,
        L: 50,
        IX: 9,
        X: 10,
        IV: 4,
        V: 5,
        I: 1
    };

    const year = Object.keys(digits).reduce((acc, key) => {
        while (value.includes(key)) {
            value = value.replace(key, '');
            acc += digits[key];
        }
        return acc;
    }, 0);

    if (year > 3999 || year < 1) {
        throw new Error('Invalid year')
    }

    return year
}