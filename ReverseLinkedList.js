//  Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let initial = new ListNode(head);
	let array = head;

	console.log(array.reverse(head));
	console.log(initial);
	console.log(array);
};

reverseList([1, 2, 3, 4, 5]);
