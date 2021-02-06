

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
console.log(child1.getMyParent()); // parent1
child1.parents.push('parent2');

const child2 = new Child();
console.log(child2.getMyParent());// parent1 parent2


/**
 * @description: 
 * 2. 借用构造函数
 * 优点：可以像父类构造函数传参
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


/**
 * @description: 
 * 3. 组合继承 == 原型链继承 + 借用构造函数模式
 * 优点：融合了两种模式的优点
 * 缺点： 调用两次父类构造函数， 带有父类的全部属性，有些可能不需要
 * @param {*}
 * @return {*}
 */

function Parent (name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();

const child1 = new Child(12, 'tom');
console.log(child1.getName());


/**
 * @description: 
 * 4. 原型式继承
 * 优点：
 * 缺点：包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
 * @param {*}
 * @return {*}
 */

 function object (o) {
    function F (){}
    F.prototype = o;
    return new F();
 }

 var person = {
     name: 'joy',
     friends: ['john', 'tom']
 }

 const person1 = object(person);
 person1.name = 'jack';
 person1.friends.push('pony');
console.log(person1);


const person2 = object(person);
person2.name = 'jack';
person2.friends.push('jimy');
console.log(person2);


/**
 * @description:
 * 5. 寄生式继承
 * 优点： 
 * @param {*}
 * @return {*}
 */

 function createAnother(o) {
     let clone = object(o);
     clone.sayHi = function () {
         console.log('hello world');
     }
 }


 /**
  * @description: 
  * 6. 寄生组合式继承
  * 解决组合继承的问题
  * @param {*}
  * @return {*}
  */ 

function object (o) {
    function F (){}
    F.prototype = o;
    return new F();
}

  function inheritPrototype (subType, superType) {
    var prototype = object(superType.prototype);
    prototype.construtor = subType;
    subType.prototype = prototype;
  }
 
  function Person (name, age) {
      this.name = name;
      this.age = age;
  }

  Person.prototype.getName = function () {
      return this.name;
  }

  function Student (name, age, classRoom) {
      Person.call(this, name, age);
      this.classRoom = classRoom;
  }

  inheritPrototype(Student, Person);

  const stu1 = new Student('tom', 12, 12);
  console.log(stu1);

  const stu2 = new Student('jane', 13, 12);
  console.log(stu2);