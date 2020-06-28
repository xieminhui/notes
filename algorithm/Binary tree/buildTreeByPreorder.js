/*
 * @Date: 2020-04-26 14:39:01
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 15:50:14
 * @description:
 */

// 根据先序遍历和中序遍历生成一颗二叉树


// Definition for a binary tree node.
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTreeByPreorder = function (preorder, inorder) {
  if (!inorder.length) return null
  let tmp = preorder[0], mid = inorder.indexOf(tmp)
  let root = new TreeNode(tmp)
  root.left = buildTreeByPreorder(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTreeByPreorder(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return root
};


let tree = buildTreeByPreorder([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(tree)

var sortedArrayToBST = function(nums) {
  function buildTree(arr) {
      if(!arr.length)return;
      let mid = parseInt(arr.length/2)
      let node = new TreeNode(arr[mid]);
      node.left = buildTree(arr.slice(0, mid))
      node.right = buildTree(arr.slice(mid+1))
      return node;
  }
 return  buildTree(nums)
 
};
sortedArrayToBST([-10,-3,0,5,9])