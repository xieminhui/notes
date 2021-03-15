/*
 * @Date: 2021-03-02 10:28:12
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-02 11:34:59
 * @description: 
 */

const isFunction = variable => typeof variable === 'function'

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor (handle) {
    this._value = null;
    this._status = PENDING;

    this._fulfilledQueues = [];
    this._rejectedQueue = [];

    try {
      handle(this._resolve().bind(this), this._reject().bind(this));
    } catch {
      this._reject(value);
    }
  }

  _resolve (value) {
    const run = () => {
      if(this._status !== PENDING) return 0;

      const fulfilled = value => {
        while(this._fulfilledQueues.length) {
          let cb = this._fulfilledQueues.shift();
          cb(value);
        }
        this._status = FULFILLED;
      }

      const rejected = value => {
        while(this._rejectedQueue.length) {
          let cb = this._rejectedQueue();
          cb();
        }
        this._status = REJECTED;
      }

      if(val instanceof Promise) {
        val.then(value => {
          this._value = value;
          fulfilled(value);
        }, err => {
          this._value = err;
          rejected(value);
        })
      }else {
        this._value = value;
        fulfilled(value);
      }
    }

    // 用于直接resolve的时候，再下一个事件循环中执行
    setTimeout(run, 0)
  }

  _reject (value) {
    const rejected = () => {
      while(this._rejectedQueue.length) {
        let cb = this._rejectedQueue.shift();
        cb();
      }
      this._status = REJECTED;
    }
    setTimeout(rejected, 0)

  }

  then (onFulfilled, onRejected) {
    const {_value, _status} = this;
    return new Promise((onFulfilledNext, onRejectedNext) => {
      const fulfilled = value => {
        if(!isFunction(onFulfilled)) {
          onFulfilledNext(value);
        } else {
          const res = onFulfilled(value);
          if(res instanceof Promise) {
            res.then(onFulfilledNext, onRejectedNext);
          }else {
            onFulfilledNext(res);
          }
        }
      }

      const rejected = value => {
        if(!isFunction(onRejected)) {
          onRejectedNext(value)
        }else {
          let res = onRejected(error);
          if (res instanceof myPromise) {
            res.then(onFulfilledNext, onRejectedNext);
          } else {
            onFulfilledNext(res)
          }
        }
      }

      switch (_status) {
        case PENDING:
          this._fulfilledQueues.push(fulfilled);
          this._rejectedQueue.push(onRejected);
          break;
        case FULFILLED:
          this.fulfilled(_value);
          break;
        case REJECTED:
          this.rejected(_value);
          break;
        default:
          break;
      }
    })
  }

  static catch (onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve (value) {
    if(p instanceof Promise) return p;
    return new Promise((resolve, reject) => resolve(value))
  }
  static reject (value) {
    if(p instanceof Promise) return p;
    return new Promise((resolve, reject) => reject(value))
  }

  static all (promises) {
    let len = 0;
    this.values = [];
    return new Promise((resolve, reject) => {
      for(let [i, p] of promises.entries()) {
        this.resolve(p).then(res => {
          this.values.push(res);
          len++;
          if(len === promises.length) resolve(this.values);
        }, err => {
          reject(err);
        })
      }
    })
  }

  static reace (promises) {
    return new Promise((resolve, reject) => {
      for(let [i, p] of promises.entries()) {
        this.resolve(p).then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
      }
    })
  }

  static finally (cb) {
    return this.then(
      value => Promise.resolve(cb()).then(() => value),
      error => Promise.resolve(error).then(err =>{ throw error })
    )
  }
}