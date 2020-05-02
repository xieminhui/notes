
/** 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*
**/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return s;
    
    // 插入#字符串避免处理奇偶长度字符串差异
    s = '#' + s.split('').join('#') + '#';
    let s1 = s[0];
    for(let i = 1; i < s.length; i++) {
        let str1 = s[i];
        for(let j = 1; j <= i; j++) {
            let left = s[i - j], right = s[j + i];
            if(left == right) {
                str1 = left + str1 + right;
            } else {
                break;
            }
            if(str1.length > s1.length) {
                s1 = str1;
            }
        }
    }
    return s1.replace(/#/g, '');
};
