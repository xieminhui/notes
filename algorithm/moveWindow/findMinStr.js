/*
 * @Date: 2020-05-21 11:24:04
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-21 16:02:07
 * @description:
 */

// 滑动窗口解法
// 先扩大窗口，再缩小窗口，不断循环，找出最小值


//  给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

//  示例：

//  输入: S = "ADOBECODEBANC", T = "ABC"
//  输出: "BANC"
//  说明：

//  如果 S 中不存这样的子串，则返回空字符串 ""。
//  如果 S 中存在这样的子串，我们保证它是唯一的答案。


function findMiniStr (str, target) {
  let left = 0, right = 0;
  let Tmap = new Map();
  let winMap = new Map();
  let match = 0, start, minLen = Infinity;
  for (let key of target) {
    if (Tmap.has(key)) {
      Tmap.set(key, Tmap.get(key) + 1)
    } else {
      Tmap.set(key, 1);
    }
  }
  while (right < str.length) {
    let key = str[right];
    if (Tmap.has(key)) {
      if (winMap.has(key)) {
        winMap.set(key, winMap.get(key) + 1);
      } else {
        winMap.set(key, 1);
      }

      // 判断两个map中的改字符是否已经相等了
      if (Tmap.get(key) == winMap.get(key)) {
        match += Tmap.get(key);
      }
    }
    right++;

    // 窗口中已经包含了target所有的字符串
    while (match >= target.length) {
      let key = str[left];
      if (right - left < minLen) {
        // 更新最小子串的位置和长度
        start = left;
        minLen = right - left;
      }
      if (Tmap.has(key)) {
        winMap.set(key, winMap.get(key) - 1);
      }
      if (winMap.get(key) < Tmap.get(key)) {
        match--;
      }
      left++;
    }
  }

  return minLen == Infinity ? '' : str.substr(start, minLen)

}

let res = findMiniStr("acbbaca", "aba");
console.log(res);