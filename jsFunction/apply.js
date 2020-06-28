

Function.prototype.myApply = function (context) {
    let fn = this;
    context.fn = fn;
    let args = [...arguments].slice(1);
    return context.fn(...args);
    delete context.fn;
}

const obj1 = {
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
  };
 
let res = Array.prototype.slice.myApply(obj1, 0);
console.log(res); 