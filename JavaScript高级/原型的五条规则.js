// 语法糖
// const obj = {}   const obj = new Object()
// const arr = []   const arr = new Array()

// const fn = new Function(){}

//! 1. 所有的引用类型（对象 数组 函数），都具有对象的特性，可以自由扩展属性
// const obj = {}   obj.a = 100
// const arr = []   [].a = 100
// funtion fn(){}   fn.a = 100

//! 2. 所有的对象，都有一个__proto__属性，属性值是一个普通的对象    [[prototype]]
//! __proto__ 也叫隐式原型
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);

//! 3. 所有的函数都有一个prototype属性，属性值也是一个普通的对象。（这个属性值是一个指针，指向原型对象），prototype也叫显式原型
console.log(fn.prototype);

//! 4. 所有对象的隐式原型__proto__，指向它的构造函数的prototype显式原型。
console.log(obj.__proto__ === Object.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(fn.__proto__ === Function.prototype);

//! 5. 当试图得到一个对像的某个属性时，如果本身没有这个属性，那么会去它的__proto__中找。