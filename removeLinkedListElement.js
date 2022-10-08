//  Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	let initial = new ListNode(-1);
	initial.next = head;
	let previous = initial;
	let current = head;

	while (current) {
		if (current.val === val) {
			previous.next = current.next;
			current = current.next;
		} else {
			previous = current;
			current = current.next;
		}
	}
	console.log(initial.next);
	return initial.next;
};

removeElements([1, 2, 6, 3, 4, 5, 6], 6);
