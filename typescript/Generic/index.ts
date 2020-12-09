/*
 * @Date: 2020-10-10 14:48:50
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 15:41:48
 * @description: 
 */

function loggingIdentity<T>(arg: T): T {
  console.log(arg);
  return arg;
}

loggingIdentity('aa');

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

// interface
interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity1: GenericIdentityFn = identity;


// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };