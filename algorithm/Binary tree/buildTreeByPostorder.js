/*
 * @Date: 2020-04-26 15:25:56
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 15:50:28
 * @description: 
 */


// Definition for a binary tree node.
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length < 1) return null;
  let rootVal = postorder.slice(-1)[0], mid = inorder.indexOf(rootVal);
  let root = new TreeNode(rootVal);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1));
  return root;
};