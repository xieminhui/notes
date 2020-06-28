

Function.prototype.myApply = function (context) {
    var context = context || window;
    var fn = this;
    context.fn = fn;
    var args = [...arguments].slice(1);
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

const obj1 = {
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
  };
 
let res = Array.prototype.slice.myApply(obj1, [0]);
console.log(res); 