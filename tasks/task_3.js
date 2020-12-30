module.exports = (value) => {
    const brackets = value.split('');
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