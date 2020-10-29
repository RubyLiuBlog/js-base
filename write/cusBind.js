/**
 * 手写bind
 */
Function.prototype.bind1 = function () {
  // 将参数解析位数组
  const args = Array.prototype.slice.call(arguments)
  // 获取第一项（this）并把数组 剔除出去
  const _this = args.shift()

  // fn.bind() 中的fn
  const self = this

  // 返回一个函数执行
  return function () {
    return self.apply(_this,args)
  }
}
function fn1(a,b){
 console.log('this',this)
 console.log(a,b)
 return 'this is fn1'
}
const fn2 = fn1.bind1({name: 'shit'},1,2)
const res = fn2()
console.log(res)