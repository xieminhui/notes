/*
 * @Date: 2020-04-23 14:20:35
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-11 11:13:27
 * @description:
 */

const { Queue } = require('../Queue')

// 二叉树及遍历

//Definition for a binary tree node.
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * @description: 前序遍历,即根左右
 * @param {TreeNode} 
 * @return: 
 */

function preOrderTraverse (node) {
  if (!node) return;
  console.log(node.val);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}


/**
 * @description: 中序遍历，即左根右
 * @param {TreeNode} 
 * @return: 
 */
function midOrderTraverse (node) {
  if (!node) return;
  midOrderTraverse(node.left);
  console.log(node.val);
  midOrderTraverse(node.right);
}



/**
 * @description: 后序遍历，即左右根
 * @param {TreeNode} 
 * @return: 
 */
function postOrderTraverse (node) {
  if (!node) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  console.log(node.val);
}


/**
 * @description: 层次遍历
 * @param {TreeNode}
 * @return:
 */

function levelOrderTraverse (node) {
  let arr = [];
  let q = new Queue();
  q.enquue(root)
  while (!q.isEmpty()) {
    let node = q.enqueue();
    arr.push(node.val);
    if (node.left) q.enquue(node.left);
    if (node.right) q.enquue(node.right);
  }
}

let a = { val: -10, next: { val: -9, next: { val: -6, next: { val: -4, next: { val: 1, next: { val: 9, next: { val: 9, next: null } } } } } } }
let b = { val: -5, next: { val: -3, next: { val: 0, next: { val: 7, next: { val: 8, next: { val: 8, next: null } } } } } }
function ListNode (val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return '';
  let node = new ListNode(null);
  let temp = node;
  while (l1 || l2) {
    let v1 = l1 && l1.val, v2 = l2 && l2.val;
    if (!v1 && v2 !== null) {
      temp.val = v2;
      l2 = l2.next;
    } else if (v1 !== null && !v2) {
      temp.val = v1;
      l1 = l1.next;
    } else if (v1 > v2) {
      temp.val = v2;
      l2 = l2.next;
    } else {
      temp.val = v1;
      l1 = l1.next;
    }
    if (!l1 && !l2) break;
    temp.next = new ListNode(null);
    temp = temp.next;
  }
  return node;
};
mergeTwoLists(a, b)


// ==================== 3叉树 =============================


var preorder1 = function (root) {
  let arr = [];
  function preorderTrave (node) {
    if (!node) return;
    arr.push(node.val);
    node.children.forEach(n => {
      preorderTrave(n);
    })
  }
  preorderTrave(root, arr);
  return arr;
};

var preorder = function (root) {
  if (!root) return [];
  let arr = [], arr1 = [];
  arr.push(root);
  while (arr.length) {
    let node = arr.pop();
    arr1.push(node.val)
    let l = node.children.length - 1;
    while (l >= 0) {
      arr.push(node.children[l])
      l--;
    }
  }
  return arr1;
};