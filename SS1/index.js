// compare var/ let/ const
function compare() {
  if(true) {
    var a = 1
    let b = 2
    const c = 1
  }
  console.log(a)
  console.log(b)
}
// String
const str = 'NGUYEN Van A'
const str2 = 'Nguyen Van A'
console.log(str.length)
console.log(str.split(' ')[0])
console.log(str.toLowerCase().includes('nguyen'))

const num = 1
const char = '1'
console.log( num === Number(char) )
// Array
const arr = [1,2,3,4]
// them vao cuoi
arr.push(5)
// them len dau
arr.unshift(0)
// check vi tri phan tu trong arr
console.log(arr.indexOf(4)) // 3
console.log(arr.indexOf(8)) // -1
// xoa phan tu o vi tri thu 2 cua arr
arr.splice(2,1)

// Object
const student = {
  name: 'Nguyen Van A',
  age: 18,
  submit: function() {
    console.log('submit')
  }
}
student.name = 'abc'
console.log(student.name)
student.submit()
// arrow function 
function sum(a, b) {
  return a + b
}
const fun = (a,b) => {
  return a + b
}
fun()