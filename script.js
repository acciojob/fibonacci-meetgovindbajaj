function fibonacci(num) {
// your code here
	return fib1(num);
}
function fib1(n) {
        if (n <= 0)
            return 0;
        return recursive(n - 1, 0, 1);
    }
function recursive(n, prev, curr) {
        if (n === 0)
            return curr;
        return recursive(n - 1, curr, curr + prev);
    }
module.exports = fibonacci;
