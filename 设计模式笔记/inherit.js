

// js 各种继承

/**
 * @description: 
 * 1. 原型链继承
 * 优点：可以继承父类的方法
 * 缺点： 父类的实列属性共享，不能向父类传参
 * @param {*}
 * @return {*}
 */

function Parent () {
    this.parents = ['parent1'];
}

Parent.prototype.getMyParent = function () {
    return this.parents
}

function Child () {
    this.isChid = true;
}

Child.prototype = new Parent();


const child1 = new Child();
console.log(child1.getMyParent()); // parent
child1.parents.push('parent2');

const child2 = new Child();
console.log(child2.getMyParent());// parent change


/**
 * @description: 
 * 2. 借用构造函数
 * 优点：
 * 缺点：
 * @param {*}
 * @return {*}
 */

function Parent (name) {
    this.name = name;
}

function Child (name) {
    Parent.call(this, name);
}

const child1 = new Child('joy');
console.log(child1.name)

const child2 = new Child('tom');
console.log(child2.name)