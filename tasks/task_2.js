module.exports = (value) => {
    validate(value);

    const string = String(value);
    const chars = string.split('');
    return chars.reverse().join('') === string;
}

function validate(value) {
    if (typeof value !== 'number') {
        throw new TypeError('Value is not a number');
    }
}