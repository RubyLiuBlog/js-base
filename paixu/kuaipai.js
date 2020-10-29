
/**
 * 快速排序
 * @param {Array} arr 数组
 */
var quickSort  = function (arr) {
  if(arr.length <= 1 ){
    return arr
  }
  let poivt = arr.splice(arr.length >> 1,1)[0]
  let left = []
  let right = []
  for(let i in arr){
    if(arr[i] < poivt){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([poivt],quickSort(right)) 
}
var test1 = [1,8,4,5,9,2,6,3,4,5,]
console.log(quickSort(test1))

/**
 * 冒泡排序
 * @param {Array} arr 
 */
var bubbleSort = function (arr) {
  const length = arr.length -1
  for(let i=0;i<length;i++){
    for(let j = 0; j<length-i;j++){
      if(arr[j]>arr[j+1]){
        let tmp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}
//test1
var test2 = [1,8,4,5,9,2,6,3,4,5]
console.log(bubbleSort(test2))

/**
 * 瞎jb写冒泡排序
 */
var bubbleSort2 = function (arr){
  if(arr.length <= 1){
    return arr
  }
  let i = length = arr.length-1
  while( i > 0 ){
    if(arr[length] < arr[i-1]){
      let tmp = arr[i-1]
      arr[i-1] = arr[length] 
      arr[length] = tmp
    }
    i-=1
  }
  let top = arr.pop()
  return sortArray(arr).concat([top])
}
var test3 = [1,8,4,5,9,2,6,3,4,5]
console.log(bubbleSort2(test3))

/**
 * 返回值
 * 对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
 * 说明
 * 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
 * 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
 * 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
 * 若 a 等于 b，则返回 0。
 * 若 a 大于 b，则返回一个大于 0 的值。
 * @param {Array} arr 
 */
var customSort = function (arr) {
  return arr.sort((a,b)=>{
    if(a-b>0){
      return 1
    }else if (a-b === 0){
      return 0
    }else{
      return -1
    }
  })
}
var test4 = [1,8,4,5,9,2,6,3,4,5]
console.log(customSort(test4))
/**
 * 选择排序
 * @param {Array} arr 
 */
var selectionSort = function (arr) {
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr
}
var test5 = [1,8,4,5,9,2,6,3,4,5]
console.log(selectionSort(test5))
