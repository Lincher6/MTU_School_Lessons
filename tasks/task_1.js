module.exports = (value) => {
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

    return Object.keys(digits).reduce((acc, key) => {
        while (value.includes(key)) {
            value = value.replace(key, '')
            acc += digits[key]
        }
        return acc
    }, 0)
}