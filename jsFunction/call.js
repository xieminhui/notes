
Function.prototype.mycall = function(context) {
    var context = context || window;
    var fn = this;
    var args = [...arguments].slice(1);
    context.fn = fn;
    var result = context.fn(...args);
    delete context.fn;
    return result;
}