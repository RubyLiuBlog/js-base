class EventHub {
  constructor(){
    this.handlers = {}
  }
  addEvent (type,event){
    if(!this.handlers[type]){
      this.handlers[type] = []
    }
    if( typeof event !== 'function'){
      throw new Error('传入的不是一个方法')
    }
    this.handlers[type].push(event)
  }
  dispatchEvent (type,...params){
    if(!this.handlers[type]){
      throw new Error('没有定义该事件')
    }
    this.handlers[type].forEach(element => {
      element(...params)
    });
  }
  removeEvent(type,eventName){
    if(!this.handlers[type]){
      throw new Error('没有定义该事件')
    }
    if(!event){
      delete this.handlers[type]
    }else{
      let idx = this.handlers[type].indexof(eventName)
      if( idx === -1){
        throw new Error('没有绑定该事件')
      }
      else{
        this.handlers[type].splice(idx, 1)
        if (this.handlers[type].length === 0) {
          delete this.handlers[type]
        }
      }
    }
  }
}