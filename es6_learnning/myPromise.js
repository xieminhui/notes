/*
 * @Date: 2020-04-15 15:04:41
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-15 17:45:07
 * @description:
 */

const isFuntion = variable => typeof variable === 'function'

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class myPromise {

  constructor(handle) {
    if (!isFuntion(handle)) {
      throw new Error('handle is not a function')
    }
    // 添加状态
    this._status = PENDING;
    //保存resolve传入的data
    this._value = undefined;

    //resolve时的回调函数队列，即.then就会根据条件往里面加入then传入的函数，这个就是回调函数
    this._fullfilledQueues = [];
    // reject时回调队列
    this._rejectedQueues = [];

    //执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }

  // resolve执行函数
  _resolve (val) {
    const run = () => {
      if (this._status !== PENDING) return;

      //依次执行成功队列中的函数，并清空队列
      const runFulfilled = (value) => {
        let cb;
        while (cb = this._fullfilledQueues.shift()) {
          cb(value);
        }
      }

      //依次执行失败队列中的函数，并清空队列
      const runRejected = (error) => {
        let cb;
        while (cb = this._rejectedQueues.shift()) {
          cb(value);
        }
      }

      // 如果resolve的参数为promise对象，则必须等待改promise对象状态改变后，
      // 当前的promise的状态才会改变，且该状态取决于参数的promise对象状态
      if (val instanceof myPromise) {
        val.then(value => {
          this._value = value;
          this._status = FULFILLED;
          runFulfilled(value);
        }, err => {
          this._value = err;
          this._status = REJECTED;
          runFulfilled(err);
        })
      } else {
        this._value = val;
        this._status = FULFILLED;
        runFulfilled(val);
      }

      // 
      setTimeout(run, 0);
    }
    
    // 
  }

  _reject (err) {
    if (this._status !== PENDING) return;

    const run = () => {
      this._status = REJECTED;
      this._value = err;
      let cb;
      while (cb = this._rejectedQueues.shift()) {
        cb(err);
      }
    }

    setTimeout(run, 0);
  }

  then (onFulfilled, onRejected) {
    const { _value, _status } = this;

    // 返回一个新的promise对象
    return new myPromise((onFulfilledNext, onRejectedNext) => {
      //
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value);
          } else {
            let res = onFulfilled(value);
            if(res  instanceof myPromise) {
              // 
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res)
            }
          }
        } catch (error) {
          onRejectedNext(err);
        }
      }

      let rejected = error => {
        try {
          if(!isFuntion(onRejected)) {
            onRejectedNext(error);
          } else {
            let res = onRejected(error);
            if(res instanceof myPromise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res)
            }
          }
        } catch (error) {
          onRejectedNext(err)
        }
      }

      switch (_status) {
        case PENDING:
          this._fullfilledQueues.push(fulfilled);
          this._rejectedQueues.push(rejected)
          break;
        case FULFILLED: 
          fulfilled(_value);
          break
        case REJECTED:
          rejected(_value);
          break; 
        default:
          break;
      }
    })
  }
}