// N blocks from 0 to N-1 in a row
// jump from one another to make most distance from eachother
// blocks J and K, J<=K is K - J + 1.

// frogs can only jump up if same or greater height as first block

// what is the longest distance they can create between them?
// they can sit on the optimal starting block initially.

function solution(blocks) {
	let counter = 0;
	let leftCounter = 0;

	for (let i = 0; i < blocks.length; i++) {
		// Go right and scan
		if (counter < blocks[i]) counter = blocks[i];
		if (counter > blocks[i]) {
			console.log("counter", counter);
			// Get the index of the highest
			return counter;
		}
		for (let j = blocks.length; j > 0; j--) {
			// Go left and scan
			if (leftCounter < blocks[j]) leftCounter = blocks[j];
			if (leftCounter > blocks[j]) {
				console.log("leftCounter", leftCounter);
				return;
			}
		}
	}
	return counter - leftCounter;
}

solution([1, 5, 5, 2, 6]);
