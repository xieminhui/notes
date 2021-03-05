
Function.prototype.mycall = function(context) {
    var context = context || window;
    var fn = this;
    var args = [...arguments].slice(1);
    context.fn = fn;
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.mybind = function(context) {
    var self = this;
    var args = [...arguments].slice(1);
    function fBound () {
        const allArgs = [...args, ...arguments];
        return self.mycall(this instanceof fNOP ? this : context, ...allArgs);
    }

    function fNOP () {

    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
 
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin