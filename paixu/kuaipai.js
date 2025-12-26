/**
 * 快速排序
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const currentArr = [...arr];

  const pivotIndex = Math.floor(currentArr.length / 2);
  const pivot = currentArr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < currentArr.length; i++) {
    currentArr[i] <= pivot
      ? left.push(currentArr[i])
      : right.push(currentArr[i]);
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
// 示例
const array = [5, 3, 8, 4, 2];
const sortedArray = quickSort(array);
console.log("quickSort:", sortedArray); // 输出: [2, 3, 4, 5, 8]

/**
 * 冒泡排序
 */
function bubbleSort(arr) {
  const currentArr = [...arr];
  const len = currentArr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (currentArr[j] > currentArr[j + 1]) {
        // 交换
        [currentArr[j], currentArr[j + 1]] = [currentArr[j + 1], currentArr[j]];
      }
    }
  }
  return currentArr;
}
// 示例
const sortedArray2 = bubbleSort(array);
console.log("bubbleSort:", sortedArray2); // 输出: [2, 3, 4, 5, 8]

/**
 * 选择排序
 */
function selectionSort(arr) {
  const currentArr = [...arr];
  const len = currentArr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (currentArr[j] < currentArr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // 交换
      [currentArr[i], currentArr[minIndex]] = [
        currentArr[minIndex],
        currentArr[i],
      ];
    }
  }
  return currentArr;
}
// 示例
const sortedArray3 = selectionSort(array);
console.log("selectionSort:", sortedArray3); // 输出: [2, 3, 4, 5, 8]

/**
 * 插入排序
 */
function insertionSort(arr) {
  const currentArr = [...arr];
  const len = currentArr.length;
  for (let i = 1; i < len; i++) {
    const key = currentArr[i];
    let j = i - 1;
    while (j >= 0 && currentArr[j] > key) {
      currentArr[j + 1] = currentArr[j];
      j--;
    }
    currentArr[j + 1] = key;
  }
  return currentArr;
}
// 示例
const sortedArray4 = insertionSort(array);
console.log("insertionSort:", sortedArray4); // 输出: [2, 3, 4, 5, 8]
