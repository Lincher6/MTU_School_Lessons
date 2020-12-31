module.exports = (value) => {
    const chars = ['(', '{', '[', ']', '}', ')'];

    if (typeof value !== 'string' && !Array.isArray(value)) {
        throw new Error('Invalid value. Expected string or array');
    } else if (value.length > 104) {
        throw new Error('String is too long');
    } else if (value.length === 0) {
        throw new Error('Value is empty');
    }

    const brackets = Array.isArray(value) ? value : value.split('');
    if (brackets.some(bracket => !chars.includes(bracket))) {
        throw new Error('Invalid characters');
    }

    const openBrackets = [];
    const valid = !brackets.some(bracket => {
        switch (bracket) {
            case '(': openBrackets.push('('); break;
            case '{': openBrackets.push('{'); break;
            case '[': openBrackets.push('['); break;
            case ')': return openBrackets.pop() !== '(';
            case '}': return openBrackets.pop() !== '{';
            case ']': return openBrackets.pop() !== '[';
        }
    })

    return openBrackets.length === 0 && valid;
}