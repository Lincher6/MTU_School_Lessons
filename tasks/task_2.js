module.exports = (value) => {
    if (typeof value !== 'number') {
        throw new Error('Value is not a number');
    }

    const string = String(value);
    const chars = string.split('');
    return chars.reverse().join('') === string;
}