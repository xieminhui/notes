Function.prototype.mybind = function(context) {
    var self = this;
    var args = [...arguments].slice(1);
    return function () {
        let newArgs = [...arguments];
        // return self.apply(context, args.concat(newArgs))
        var fn = self;
        var allArgs = args.concat(newArgs);
        context.fn = fn;
        var result = context.fn(...allArgs);
        delete context.fn;
        return result;
    }
}
 
const obj1 = {
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
  };
 
let res = Array.prototype.slice.mybind(obj1, 0);
console.log(res()); 