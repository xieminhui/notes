/*
 * @Date: 2020-10-19 15:46:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-19 15:54:23
 * @description:
 */

// 策略模式
// 特点：
// 解决多个选择带来的多if条件问题


/**
 * @description: 判断用户vip类型
 * @param {number} 
 * @return {string} 
 */
var juedgeUserRight = (type) => {
  if (type === 1) {
    return 'general user';
  } else if (type === 2) {
    return 'vip user';
  } else if (type === 3) {
    return 'super vip user';
  }
}

const userObj = {
  '1' () {
    console.log('general user')
  },
  '2' () {
    console.log('vip user');
  },
  '3' () {
    console.log('supervip user');

  }
}