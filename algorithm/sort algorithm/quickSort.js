/*
 * @Date: 2020-04-24 17:32:29
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 10:53:26
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
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort2(arr, 0, arr.length - 1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]


module.exports.quickSort = quickSort;