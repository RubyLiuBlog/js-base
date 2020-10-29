var MAP = {
  curry: function (val) {
    return function(z) {
      return val++ + z
    }
  }
}

var getInfo = function(val) {
  return MAP[val]
}

var fn = getInfo('curry')
var a = fn(100)

console.log(a(200))
console.log(a(300))
console.log(fn(100)(200))
console.log(getInfo('curry')(100)(300))

// 2. 写出下面代码的运行结果
var x = 5;
function fn () {
console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.fn = fn;
obj.fn.apply();
obj.fn.apply(obj);
console.log(window.x)

// 3. 写出下面代码的运行结果
const obj = {
  val: 11,
};
obj.val = 22;
console.log(obj);
obj = 4;
console.log(obj); 

// 4.写出下面代码的运行结果
function Foo() {
  var i = 0;
  return function () {
  console.log(i++);
  }
}
var f1 = Foo(), f2 = Foo();
f1();
f1();
f2();
