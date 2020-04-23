/*
 * @Date: 2020-04-23 14:20:35
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-23 15:06:25
 * @description:
 */


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
  preTraverse(node.left);
  preTraverse(node.right);
}


/**
 * @description: 中序遍历，即左根右
 * @param {TreeNode} 
 * @return: 
 */
function midOrderTraverse (node) {
  if (!node) return;
  preTraverse(node.left);
  console.log(node.val);
  preTraverse(node.right);
}



/**
 * @description: 后序遍历，即左右根
 * @param {TreeNode} 
 * @return: 
 */
function postOrderTraverse (node) {
  if (!node) return;
  preTraverse(node.left);
  preTraverse(node.right);
  console.log(node.val);
}
