const customNew = (fn,...args) => {
  const temp = Object.create(fn.prototype)
  fn.apply(temp,[...args])
  return temp
}
function people(name,age){
  this.name = name
  this.age = age
}
people.prototype.sayHiy = function (){
  console.log(this.name+'|'+this.age)
}
let ruby = customNew(people,'rubyLiu',16)
ruby.sayHiy()