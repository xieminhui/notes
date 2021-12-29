/*
 * @Date: 2020-05-27 11:41:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-26 20:08:19
 * @description:
 */

const {createTree} = require('./Binary tree/index');


function isSameTree(root ) {
    
  let ret = 0;
  function dfs(node, val) {
      if(!node) {
          ret += Number(val);
          return;
      } 
      dfs(node.left, val + node.val );
      dfs(node.right, val + node.val);

  }
  dfs(root, '');
  return ret;
};

const t = '10000000000';

isSameTree(createTree([1,2,3]))