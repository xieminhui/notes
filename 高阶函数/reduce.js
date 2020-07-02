/*
 * @Date: 2020-07-02 15:52:01
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-07-02 16:00:49
 * @description:
 */


// =============================== 题目1 ===================================
// add(1); 			// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；// 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

function add () {
  let args = [...arguments];
  let addFn = function () {
    args.push(...arguments);
    return addFn;
  }
  addFn.toString = function () {
    return args.reduce((a, b) => {
      return a + b;
    })
  }
  // 触发隐式类型转换，调用toString
  return addFn;
}

// test 
console.log(
  add(1),			// 1
  add(1)(2),  	// 3
  add(1)(2)(3), // 6
  add(1)(2, 3), // 6
  add(1, 2)(3), // 6
  add(1, 2, 3) // 6
)