const countTagName = (tag) => {
  const map = new Map()
  const dfs = (root) => {
    map.set(root.tagName,map.has(root.tagName) ? map.get(root.tagName) + 1 : 1)
    for(let i=0;i<root.children.length;i++){
      dfs(root.children[i])
    }    
  }
  dfs(tag)
  return map
}
console.log(countTagName(document.getElementById('rich')))
