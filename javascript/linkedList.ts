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
function findLast(node: ListNode) {
  let currentNode = node;

  if(!currentNode) return null;

  while (currentNode.next) {
      if (!currentNode.next) return currentNode
      currentNode = currentNode.next
  }

  return currentNode;
}

class ListNode {
  value: string | number;
  next: ListNode;

  constructor(value: string | number, next: ListNode = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode;

  constructor(head: ListNode = null) {
    this.head = head;
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
  add(node: ListNode) {
    let currentNode = this.head;

    // If the list is empty, then make the head the ListNode passed in to this function.
    if (!currentNode) {
      this.head = node;
      return;
    }
    // If the list is not empty, iterate to the end of the list and add the ListNode at the end of the list.
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

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
  addAt(value: string | number, node: ListNode): void | null {

    const searchNode = this.find(value);

    if (!searchNode) return null;

    // Assign the current .next value of found node to temp
    const temp = searchNode.next;

    // Assign the new .next value of found node to the node we want to add
    searchNode.next = node;

    const lastNode = findLast(node);
    // Assign the .next value of the last node of the node we passed in to the original .next value stored in temp
    lastNode.next = temp;
  }

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
  find(value: string| number) {
    let currentNode = this.head;

    if (!currentNode) return null;

    while (currentNode) {
        if (currentNode.value === value) return currentNode;
        currentNode = currentNode.next;
    }
  }

  getFirst() {

  }

  /**
   * Determines length of LinkedList.
   * 
   * Time complexity: `O(n)`
   * 
   * Space complexity: `O(1)`
   * 
   * @returns Length of LinkedList
   */
  getSize() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /**
   * Prints a string representation of the LinkedList.
   * 
   * Time complexity: `O(n)`, as we are iterating through each ListNode in the LinkedList in order to add its value to a temporary array of which we convert into the final string representation.
   * 
   * Space complexity: `O(n)`, we take up `n` storage in memory, storing each value of `n` number of ListNodes in the LinkedList.
   * 
   * @returns String representation of LinkedList | `null`
   */
  print() {
    let values = [];

    let currentNode = this.head;

    if(!currentNode) return null;

    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next
    }

    return values.join(" > ");
  }

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
  remove(value: string | number): void | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next.value === value) {
        const temp = currentNode.next.next;
        currentNode.next = temp;
        return;
      }
      currentNode = currentNode.next
    }

    return null;
  }
}


// Testing
////////////
// const list = new LinkedList(obj);
// console.log(list.getSize()); // 6

// const obj2 = new ListNode(
//   6,
//   new ListNode(
//     5,
//     new ListNode(
//       4,
//       new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(0))))
//     )
//   )
// );

// const list2 = new LinkedList(obj2);
// console.log(list2.getSize()); // 7
// list2.add(new ListNode(-1));
// console.log(list2.getSize()); // 8
// console.log(list2.print());

// const list3 = new LinkedList(new ListNode(1, new ListNode(2)));
// console.log(list3.print());
// console.log(list3.find(2)); // ListNode { value: 2, next: null }
// console.log(list3.find(3)); // -1

// const list4 = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
// console.log(list4.print()); // 1 > 2 > 3
// list4.addAt(2, new ListNode(4));
// console.log(list4.print()); // 1 > 2 > 4 > 3
// const largeNode = new ListNode(5, new ListNode(6, new ListNode(7)));
// need to get last Node of node passed in to the add function, in the event there is more than one node to add, like multiple nodes. Find the last node in the list and set that node's .next value to the temp
// console.log(largeNode);
// list4.addAt(2, largeNode);
// console.log(list4.print()); // 1 > 2 > 5 > 6 > 7 > 4 > 3
// console.log(list4.findLast(largeNode));

const list5 = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
console.log(list5.print())
console.log(findLast(list5.head));
list5.addAt(2, new ListNode(4, new ListNode(5, new ListNode(6))));
console.log(list5.print()); // 1 > 2 > 4 > 5 > 6 > 3
list5.remove(5); 
console.log(list5.print()); // 1 > 2 > 4 > 6 > 3

const list6 = new LinkedList(new ListNode(1, new ListNode(2)));
list6.remove(2);
console.log(list6.print()); // 1



