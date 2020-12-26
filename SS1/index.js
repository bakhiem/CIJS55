// compare var/ let/ const
// function compare() {
//   if(true) {
//     var a = 1
//     let b = 2
//     const c = 1
//   }
//   console.log(a)
//   console.log(b)
// }
// // String
// const str = 'NGUYEN Van A'
// const str2 = 'Nguyen Van A'
// console.log(str.length)
// console.log(str.split(' ')[0])
// console.log(str.toLowerCase().includes('nguyen'))

// const num = 1
// const char = '1'
// console.log( num === Number(char) )
// // Array
// const arr = [1,2,3,4]
// // them vao cuoi
// arr.push(5)
// // them len dau
// arr.unshift(0)
// // check vi tri phan tu trong arr
// console.log(arr.indexOf(4)) // 3
// console.log(arr.indexOf(8)) // -1
// // xoa phan tu o vi tri thu 2 cua arr
// arr.splice(2,1)

// // Object
// const student = {
//   name: 'Nguyen Van A',
//   age: 18,
//   submit: function() {
//     console.log('submit')
//   }
// }
// student.name = 'abc'
// console.log(student.name)
// student.submit()
// // arrow function 
// function sum(a, b) {
//   return a + b
// }
// const fun = (a,b) => {
//   return a + b
// }
// fun()

// 3.Given an array of number, find the pair of adjacent elements 
// that has the largest product and return that product.
inputArray = [3, 6, -2, -5, -7, 3]
// adjacentElementsProduct(inputArray) = 21
function adjacentElementsProduct(inputArray) {
  if (inputArray.length > 2) {
    let max = inputArray[0] * inputArray[1]
    for (let index = 1; index < inputArray.length - 1; index++) {
      const mul = inputArray[index] * inputArray[index + 1]
      if (mul > max) {
        max = mul
      }
    }
    return max
  }
}
// console.log(adjacentElementsProduct(inputArray))

// 4. a. Given an array of number, find the odd number
// b. find but not use loop
inputArray2 = [3, 6, -2, -5, 7, 3, 8, 10, 11]
// outPut = [3, -5, 7, 3, 11]
// outPut = [6, 12, -4, -10,...]
function findOddNumber(inputArr) {
  let arr = []
  for (const iterator of inputArr) {
    if(iterator % 2 !== 0) {
      arr.push(iterator)
    }
  }
  return arr
}
const findOdd = (item) => {
  return item % 2 !== 0
}
const result = inputArray2.filter(findOdd)
const result2 = inputArray2.map(item => item * 2)


