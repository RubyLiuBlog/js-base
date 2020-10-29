function cusAjax (options){
  options = Object.assign({
    url: '',
    method: 'post',
    async: true,
    data: null,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  },options)
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(options.method,options.url,options.async)
    if(options.method === 'post'){
      Object.keys(options.headers).forEach(key =>{
        xhr.setRequestHeader(key,options.headers[key])
      })
    }
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 304){
          resolve(JSON.parse(xhr.responseText))
        }else{
          reject(xhr)
        }
      }
    }
  })
}