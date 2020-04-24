/*
 * @Date: 2020-04-24 11:14:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-24 11:16:10
 * @description:
 */



// 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
// 示例 1:

// 输入: [[1,1],[2,2],[3,3]]
// 输出: 3
// 解释:
// ^
// |
// |        o
// |     o
// |  o  
// +------------->
// 0  1  2  3  4



/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const len = points.length
  if (len <= 2) {
    return len
  }
  // 至少有两个点在一条直线上
  let count = 2
  // 存储相同点个数
  let same = 0
  for (let i = 0; i < len; i++) {
    const p1 = points[i]
    // 保存每一轮循环在一条直线上的最大点数量
    let max = 0
    // 用一个map来存储包括当前点最多可以有几个点同在直线
    const map = new Map()
    for (let j = 0; j < len; j++) {
      if (i != j) {
        const p2 = points[j]
        if (isSamePoint(p1, p2)) {
          same++
        } else {
          // 判断两个点是不是在同一直线上，k + b存map
          const arg = getLinerfunction(p1, p2)
          if (!map.has(arg)) {
            map.set(arg, 2)
          } else {
            map.set(arg, map.get(arg) + 1)
          }
        }
      }
    }
    map.forEach(arg => {
      max = Math.max(max, arg)
    })
    // 如果max为0，说明所有点都是相同点，则直接返回len
    if (max) {
      max += same
    } else {
      return len
    }
    same = 0
    count = Math.max(count, max)
  }
  return count
};

// 根据两点得到直线方程参数
function getLinerfunction (p1, p2) {
  // 防止数据越界，对数据做一个缩放
  const maxInt = 0xffffff
  const k = ((p1[1] - p2[1]) % maxInt * maxInt) / (p1[0] - p2[0])
  const b = p1[1] - k * p1[0]
  return `${k}+${b}`
}
// 判断两个点是否是同一个点
function isSamePoint (p1, p2) {
  return (p1[0] === p2[0]) && (p1[1] === p2[1])
}


maxPoints([[1, 1], [2, 3], [3, 3], [3, 5], [4, 4]])