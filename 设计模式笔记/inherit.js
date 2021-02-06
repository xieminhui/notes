// js 各种继承



/**
 * 
 * 1. 原型链继承
 * 优点：可以继承父类的方法
 * 缺点： 父类的实列属性共享，不能向父类传参
 *
 */
function Parent () {
    this.parent = 'parent';
}

Parent.prototype.getMyParent = function () {
    return this.parent
}

function Child () {
    this.isChid = true;
}

Child.prototype = new Parent();


const child1 = new Child();
console.log(child1.getMyParent()); // parent
child1.parent = 'parent change';

const child2 = new Child();
console.log(child1.getMyParent());// parent change

