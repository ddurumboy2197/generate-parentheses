function generateParenthesis(n) {
    let result = [];

    function backtrack(open, close, current) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(open + 1, close, current + "(");
        }

        if (close < open) {
            backtrack(open, close + 1, current + ")");
        }
    }

    backtrack(0, 0, "");
    return result;
}

console.log(generateParenthesis(3));
