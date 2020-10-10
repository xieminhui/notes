/*
 * @Date: 2020-10-10 15:47:42
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 16:22:26
 * @description:
 */

enum Directoin {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Directoin)

enum E {
  X, Y, Z
}

function f(obj: { X: number }) {
  return obj.X;
}

f(E)