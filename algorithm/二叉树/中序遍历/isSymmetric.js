/*
 * @Date: 2020-04-23 14:21:01
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-23 14:52:09
 * @description:
 */

//  给定一个二叉树，检查它是否是镜像对称的。

//  

//  例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//      1
//     / \
//    2   2
//   / \ / \
//  3  4 4  3
//   

//  但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//      1
//     / \
//    2   2
//     \   \
//     3    3


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @description: 二叉树是否镜像
 * @param {TreeNode} root
 * @return {Boolean}: 
 */
var isSymmetric = function (root) {
  var arr = [];
  middleTraverse(root, 1, arr);
  if (arr.length === 1) return true;
  // if(arr.length % 2 == 0) return false;
  // let j = parseInt(arr.length / 2);
  // let string1 = arr.slice(0, j).join('');
  // let string2 = arr.slice(j+1).reverse().join('');
  console.log(arr);
  return arr.join('') === arr.reverse().join('');

};

/**
 * @description: 中序遍历二叉树，返回由层数跟节点层数组成的arr
 * @param {TreeNode} node
 * @param {Number} level
 * @param {Array} arr
 * @return: 
 */
function middleTraverse (node, level, arr) {
  if (!node) return;
  middleTraverse(node.left, level + 1, arr);
  // 加上节点所在的层数
  let value = node.val + '' + level;
  arr.push(value);
  middleTraverse(node.right, level + 1, arr);
}


// ======================== ================================
// 非递归解法就是用queue来存

// define Queue
function Queue () {
  this.data = [];
}

/**
 * @description: 进入队列
 * @param {*} 
 * @return: 
 */
Queue.prototype.enquue = function (ele) {
  this.data.push(ele);
}

/**
 * @description: 出队列 
 * @return: 
 */
Queue.prototype.dequeue = function () {
  return this.data.shift();
}

/**
 * @description: 放回队列是否为空
 * @return {boolean}: 
 */
Queue.prototype.isEmpty = function () {
  if (this.data.length == 0) {
    return true;
  }
  else {
    return false;
  }
}

var isSymmetric = function (root) {
  let q = new Queue();
  q.enquue(root);
  q.enquue(root);
  while (!q.isEmpty()) {
    let t1 = q.dequeue();
    let t2 = q.dequeue();
    if (t1 == null && t2 == null) continue;
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    q.enquue(t1.left);
    q.enquue(t2.right);
    q.enquue(t1.right);
    q.enquue(t2.left);
  }
  return true;
};
