const arr = [1, 2, 2, 3, 4, 4, 5];

/**
 * 双层for循环去重
 */
function uniqueArrayWithFor(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(arr[i]);
    }
  }
  return res;
}

// 示例
console.log("双层for循环去重: ", uniqueArrayWithFor(arr)); // 输出: [1, 2, 3, 4, 5]

/** reduce去重 */
function uniqueArrayWithReduce(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

// 示例
console.log("reduce去重: ", uniqueArrayWithReduce(arr)); // 输出: [1, 2, 3, 4, 5]

/** Set去重 */
function uniqueArrayWithSet(arr) {
  return Array.from(new Set(arr));
}

// 示例
console.log("Set去重: ", uniqueArrayWithSet(arr)); // 输出: [1, 2, 3, 4, 5]

/** filter去重 */
function uniqueArrayWithFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 示例
console.log("filter去重: ", uniqueArrayWithFilter(arr)); // 输出: [1, 2, 3, 4, 5]
