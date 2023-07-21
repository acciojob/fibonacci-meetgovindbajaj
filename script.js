function fibonacci(num) {
// your code here
	return fib1(num-1);
}
function fib1(n) {
        if (Number(n) <= 0)
            return 0;
        return recursive(Number(n - 1), Number(0), Number(1));
    }
function recursive(n, prev, curr) {
        if (n === 0)
            return curr;
        return recursive(Number(n - 1), Number(curr), Number(curr) + Number(prev));
    }
module.exports = fibonacci;
