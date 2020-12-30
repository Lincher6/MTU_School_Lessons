module.exports = (value) => {
    const string = String(value);
    const chars = string.split('');
    return chars.reverse().join('') === string;
}