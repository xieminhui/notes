/*
 * @Date: 2021-01-28 10:35:30
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-01-28 11:13:03
 * @description:
 */

function _new () {
  const constructor = Array.prototype.slice.call(arguments, 0, 1)[0];
  let ret = Object.create(null);
  ret._proto_ = constructor.prototype;
  constructor.call(ret, ...Array.prototype.slice.call(arguments, 1));
  return ret;
}

function person (name, age) {
  this.name = name;
  this.age = age;
  return 'ag0';
}

const person1 = _new(person, 'kev', '18');
console.log(person1);