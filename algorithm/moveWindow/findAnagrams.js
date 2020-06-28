/*
 * @Date: 2020-05-21 16:28:05
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-21 16:34:05
 * @description:
 */

//  给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

//  字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

//  说明：

//  字母异位词指字母相同，但排列不同的字符串。
//  不考虑答案输出的顺序。
//  示例 1:

//  输入:
//  s: "cbaebabacd" p: "abc"

//  输出:
//  [0, 6]

//  解释:
//  起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
//  起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
//   示例 2:

//  输入:
//  s: "abab" p: "ab"

//  输出:
//  [0, 1, 2]

//  解释:
//  起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
//  起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
//  起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。


function findAnagrams (str, target) {
  let left = 0, right = 0;
  let Tmap = new Map();
  let winMap = new Map();
  let match = 0, start, minLen = Infinity;
  let stack = [];
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
        match = match > target.length ? target.length : match;
      }
    }
    right++;

    // 窗口中已经包含了target所有的字符串
    while (match >= target.length) {
      let key = str[left];
      if (right - left == target.length) {
        stack.push(left);
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