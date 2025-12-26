function myInstanceof(obj, constructor) {
  // Check if constructor is a function
  if (typeof constructor !== "function") {
    throw new TypeError("Right-hand side of instanceof is not callable");
  }
  // Get the prototype of the constructor
  let prototype = constructor.prototype;

  // Get the prototype of the object
  let proto = Object.getPrototypeOf(obj);

  // Traverse the prototype chain
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const alice = new Person("Alice", 30);

console.log(myInstanceof(alice, Person)); // true
console.log(myInstanceof(alice, Object)); // true
console.log(myInstanceof(alice, Array)); // false
