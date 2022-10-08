//  * Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
	let current = new ListNode();
	const dummy = current;
	while (list1 && list2) {
		// recursive start
		if (list1.val < list2.val) {
			// compare list1 and list2
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next; // configure latest update.next so that it doesn't overwrite previous value
	}
	if (list1) {
		// if there's no more list2 available, update current list with the remaining list of list1
		current.next = list1;
	}
	if (list2) {
		// if there's no more list1 available, update current list with the remaining list of list2
		current.next = list2;
	}
	return dummy.next; // need to call .next so that it shows the last item in the list.
};
