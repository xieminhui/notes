/*
 * @Date: 2021-01-27 15:02:27
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-01-27 16:19:24
 * @description:
 */

/*
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

*/

class LazyManClass {
  constructor(name) {
    const cb = this.sayHi.bind(this);
    this.name = name;
    this.callBack = [];
    this.sayHi();
    Promise.resolve().then(() => {
      this.next();
    })
    return this;
  }
  next () {
    const cb = this.callBack.shift();
    cb && cb();
    return this;
  }
  addCb (cb, type = 'end') {
    const typeFn = {
      'first': function (cb) {
        this.callBack.unshift(cb)
      }
      ,
      'end': function (cb) {
        this.callBack.push(cb)
      }
    }
    typeFn[type].call(this, cb);
    return this;
  }
  sayHi () {
    console.log(`Hi I am ${this.name}`);
    return this;
  }
  eat (thing) {
    const cb = (thing) => {
      return () => {
        this.eatThing(thing);
        this.next();
        return this;
      }
    }
    this.addCb(cb(thing));
    return this;
  }
  eatThing (thing) {
    console.log(`I am eating ${thing}`);
  }
  sleepFirst (time) {
    this.sleep(time, 'first');
    return this;
  }
  sleep (time, type = 'end') {
    const cb = () => {
      setTimeout(() => {
        console.log(`waiting ${time}s`);
        this.next();
        return this;
      }, time * 1000);
    }
    this.addCb(cb, type);
    return this;
  }
}

function LazyMan (name) {
  return new LazyManClass(name);
}

debugger;
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(2).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food