/**
 * 深拷贝js
 * 
 */
const obj1 = {
  age: 20,
  name: 'ruby',
  address: {
    city: 'beijing'
  },
  arr: ['a','b','c']
}
const obj2 = obj1
obj2.address.city = 'shijiazhuang'
console.log(obj1.address.city)

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}){
  if(typeof obj !== 'object'){
    // obj 是null 或者不是对象或数组直接返回
    return obj
  }
  let result
  if ( obj instanceof Array ) {
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      // 递归
      result[key] = deepClone(obj[key])
    }
  }
  return result
}