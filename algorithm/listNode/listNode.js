/*
 * @Date: 2021-03-11 15:04:49
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-11 15:16:53
 * @description: 
 */


 function listNode (val) {
  this.val = val;
  this.next = null;
 }


//  反转一个单链表。

//  示例:
 
//  输入: 1->2->3->4->5->NULL
//  输出: 5->4->3->2->1->NULL

var reverseList = function(head) {
    let temp = new ListNode(null);

    while(head) {
        temp.val = head.val;
        let a  = new ListNode(null);
        a.next = temp;
        temp = a;
        head = head.next;
    }
    return temp.next;
};


// 给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，
// 而不是基于节点的值。换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。

var getIntersectionNode = function(headA, headB) {
  while(headA) {
      headA.isTravel = true;
      headA = headA.next
  }
  while(headB) {
      if(headB.isTravel)return headB;
      headB = headB.next;
  }
  return null
};


// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

// 示例1:

//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
// 示例2:

//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]
var removeDuplicateNodes = function(head) {
  if(!head) return head;
 let map = new Map().set(head.val);
 let temp, node = head;
 while(head.next) {
     let val = head.next.val;
     if(!map.has(val)) {
         map.set(val, 1)
         head = head.next;
     } else {
         head.next = head.next.next;
     }
 }
 return node
};



// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

// 注意：本题相对原题稍作改动

// 示例：

// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4


var kthToLast = function(head, k) {
  let node = head;
  for(let i = 0; i<k;i++) {
      node = node.next
  }
  while(node) {
      head = head.next;
      node = node.next;
  }
  return head.val;
};



// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。


var middleNode = function(head) {
  let t1 = head;let t2 = head;
  while(t2 && t2.next) {
      t1 = t1.next;
      t2 = t2.next.next;
  }
  return t1;
};

// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
// 输入：head = [4,5,1,9], node = 5
// 输出：[4,1,9]
// 解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

