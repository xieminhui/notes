
// 单调递增栈
// 从栈顶到栈低依次递增
// 栈中保留的都是比当前入栈元素大的值，因此可以快速找到入栈元素左边比他大的元素

// 算法框架：
// 从右左遍历（或者从左到右）
// for(let i = arr.length-1; i>=0; i--) {
//   while(stack.length && stack[stack.length-1] < arr[i]) {
//     arr.pop();
//   }
//   // 在数组中，右边比当前元素大的第一个元素
//   let lmax = stack[stack.length-1];
//   // 做点啥
//   ...
//   arr.push(arr[i])
// }




// 每头牛只能看见右边的牛的头
// 假如牛的高度分别为 [10，3，7，4，12，2]
// 输出每头牛能看到右边牛的头数

function find (arr) {
  let stack = new Array();
  let ret = new Array();
  for(let i= arr.length-1; i >= 0; i--) {
    while(stack.length && arr[stack[stack.length-1]] < arr[i]) {
      stack.pop();
    }
    let num = 0;
    if(!stack.length) {
      // 说明目前他是最大的
      num = arr.length;
    } else {
      num = stack[stack.length-1];
    }

    ret.unshift(num-i-1);
    stack.push(i);
  }
  return ret;
}

console.log(find([10, 3, 7, 4, 12, 2]))



