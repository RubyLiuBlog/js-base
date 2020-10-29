class JQuery{
  constructor(selector){
    const result = document.querySelectorAll(selector)
    const lenth = result.length
    for(let i = 0; i<lenth; i++) {
      this[i] = result[i]
    }
    this.length = lenth
  }
  /**
   * 获取下标元素
   * @param {int} index 
   */
  get(index){
    if(index > this.length-1)
    {
      console.log('传入的元素值太大')
    }else{
      return this[index]
    }
  }
  /**
   * 遍历元素，执行某个方法
   * @param {Function} fn 
   */
  each(fn){
    for(let i in this){
      const elem = this[i]
      fn(elem)
    }
  }
  on(type,fn) {
    return this.each(elem => {
      elem.addEventListener(type,fn,false)
    })
  }

}
