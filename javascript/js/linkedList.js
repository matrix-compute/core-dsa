/**
 * Finds the last ListNode in any given ListNode of a LinkedList.
 *
 * Time complexity: `O(n)`, `n` being the number of ListNodes in the LinkedList.
 *
 * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
 *
 * @param node ListNode in which you want to find the last ListNode
 * @returns Last ListNode in the LinkedList
 */
function findLast(node) {
    var currentNode = node;
    if (!currentNode)
        return null;
    while (currentNode.next) {
        if (!currentNode.next)
            return currentNode;
        currentNode = currentNode.next;
    }
    return currentNode;
}
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
        this.length = 0;
    }
    /**
     * Adds a ListNode to the end of the LinkedList.
     *
     * Time complexity: `O(1)` if added to the head. Otherwise, `O(n)` due to traveling to the last ListNode in order to add the new ListNode.
     *
     * Space complexity: `O(n)`, `n` being the number of nodes in the ListNode being added.
     *
     * @returns Length of LinkedList
     */
    LinkedList.prototype.add = function (node) {
        var currentNode = this.head;
        // If the list is empty, then make the head the ListNode passed in to this function.
        if (!currentNode) {
            this.head = node;
            this.length++;
            return;
        }
        // If the list is not empty, iterate to the end of the list and add the ListNode at the end of the list.
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.length++;
    };
    /**
     * Adds a new ListNode to the LinkedList. New ListNode will be added as the `.next` value of the requested ListNode.
     *
     * Time complexity: `O(n + m)`, `n` being the number of ListNodes we must search through in order to determine if the value `node` exists in the LinkedList, `m` being the number of ListNodes we must search for in finding the last node.
     *
     * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
     *
     * @param value The ListNode value we are searching for and modifying.
     * @param node The ListNode node we are adding.
     * @returns `void` if successful, otherwise `null` if the `value` is not found in the LinkedList.
     */
    LinkedList.prototype.addAt = function (value, node) {
        var searchNode = this.find(value);
        if (!searchNode)
            return null;
        // Assign the current .next value of found node to temp
        var temp = searchNode.next;
        // Assign the new .next value of found node to the node we want to add
        searchNode.next = node;
        var lastNode = findLast(node);
        // Assign the .next value of the last node of the node we passed in to the original .next value stored in temp
        lastNode.next = temp;
        this.length++;
    };
    /**
     * Searches the LinkedList for the given value. Returns the first instance of the value in the LinkedList or `null` if the value does not exist in the LinkedList.
     *
     * Time complexity: `O(n)`, n being the total number of ListNodes in the LinkedList to search.
     *
     * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
     *
     * @param value The value to search the LinkedList for.
     * @returns ListNode if successful, `null` if the value was not found in the LinkedList
     */
    LinkedList.prototype.find = function (value) {
        var currentNode = this.head;
        if (!currentNode)
            return null;
        while (currentNode) {
            if (currentNode.value === value)
                return currentNode;
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.getFirst = function () { };
    /**
     * Determines length of LinkedList.
     *
     * Time complexity: `O(n)`, `n` being the number of ListNodes in the LinkedList to count.
     *
     * Space complexity: `O(1)`, no additional space is being used to calculate the length of the LinkedList.
     *
     * @returns Length of LinkedList
     */
    LinkedList.prototype.getSize = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    /**
     * Prints a string representation of the LinkedList.
     *
     * Time complexity: `O(n)`, as we are iterating through each ListNode in the LinkedList in order to add its value to a temporary array of which we convert into the final string representation.
     *
     * Space complexity: `O(n)`, we take up `n` storage in memory, storing each value of `n` number of ListNodes in the LinkedList.
     *
     * @returns String representation of LinkedList | `null`
     */
    LinkedList.prototype.print = function () {
        var values = [];
        var currentNode = this.head;
        if (!currentNode)
            return null;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values.join(" > ");
    };
    /**
     * Removes the first ListNode from the LinkedList with the given `value`.
     *
     * Time complexity: `O(n)`, `n` being the number of ListNodes in the LinkedList, since we may have to search the entire LinkedList.
     *
     * Space complexity: `O(1)`, no additional space is being used to search through and remove the ListNode from the LinkedList.
     *
     * @param value The ListNode we are wanting to remove.
     * @returns `void` if the ListNode was removed successfully | `null` if the ListNode value does not exist in the LinkedList.
     */
    LinkedList.prototype.remove = function (value) {
        var currentNode = this.head;
        if (currentNode.value === value) {
            this.head = currentNode.next;
            this.length--;
            return;
        }
        else {
            while (currentNode) {
                if (currentNode.next.value === value) {
                    var temp = currentNode.next.next;
                    currentNode.next = temp;
                    this.length--;
                    return;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    return LinkedList;
}());
// Testing
////////////
var list = new LinkedList();
list.add(new ListNode(1));
list.add(new ListNode(2));
list.add(new ListNode(3)); // 1 > 2 > 3
console.log(list.length); // 3
list.remove(1);
console.log(list.print()); // 2 > 3
console.log(list.length); // 2
