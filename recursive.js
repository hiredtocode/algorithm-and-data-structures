// This is an algorithm that's commonly used to run code without knowing the limit of depth.
// Recursion needs to stopping point so make sure it's there so that it doesn't run endlessly.

function factorial(n) {
	if (n == 1 || n == 0) return 1;
	else return n * factorial(n - 1);
}

console.log(factorial(3));
