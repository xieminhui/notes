/*
 * @Date: 2020-04-24 17:32:29
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-16 17:46:02
 * @description:
 */



// 快速排序
//快速排序属于高级排序算法,此时就不是相似的循环嵌套.它的大概思想就是:
// 找到一个数作为参考，比这个数字大的放在数字右边，比它小的放在左边； 然后分别再对左边和右边的序列做相同的操作(递归).

// 1.从数列中挑出一个元素，称为 “基准”（pivot）;
// 2.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
//// 在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
// 3.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序


function quickSort (arr) {
  if (arr.length <= 1) return arr;

  let left = [], right = [];
  pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}


var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// concat也不适合大量数据的排序,会消耗大量内存
// 优化


//改进版:
function partition2 (arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort2 (arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}
var arr = [1, 9, 10, 3, 8, 7, 6, 2, 4];
console.log(quickSort2(arr, 0, arr.length - 1));


module.exports.quickSort = quickSort;


 
// 题目：输入 n 个整数，找出其中最小的 K 个数。例如输入 4,5,1,6,2,7,3,8 这8个数字，则最小的4个数字是 1,2,3,4 。
// // 第二种思路是由于我们只需要获得最小的 k 个数，这 k 个数不一定是按序排序的。因此我们可以使用快速排序中的 part
// ition函数来实现。每一次选择一个枢纽值，将数组分为比枢纽值大和比枢纽值小的两个部分，判断枢纽值的位置，如果该枢
// 纽值的位置为 k-1 的话，那么枢纽值和它前面的所有数字就是最小的 k 个数。如果枢纽值的位置小于 k-1 的话，假设枢
// 纽值的位置为 n-1，那么我们已经找到了前 n 小的数字了，我们就还需要到后半部分去寻找后半部分 k-n 小的值，进行划
// 分。当该枢纽值的位置比 k-1大时，说明最小的 k 个值还在左半部分，我们需要继续对左半部分进行划分。这一种方法的平
// 均时间复杂度为 O(n)。
let ret = [];
function find (arr, k) {
  if(arr.length <= 1) return arr;
  let mid = arr[0];
  let left = [];
  let right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] >= mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  if(left.length == k-1) {
    ret =  ret.concat(left,mid);
    return ;
  }else if(left.length < k-1) {
    ret = ret.concat(left, mid);
    find(right, k-left.length-1)
  }else if(left.length == 0) {
    find(right, k);
  } else if(left.length > k -1) {
    find(left, k);
  }
}

find([4,5,1,6,2,7,3,8], 6)