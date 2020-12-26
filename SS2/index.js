class Student {
  name
  dob
  address
  constructor(name, dob, address) {
    this.name = name
    this.dob = dob
    this.address = address
  }
  getAge() {
    return 2020 - this.dob
  }
}
class Admin {
  listStudent
  constructor() {
    this.listStudent = []
  }
  addStudent(student) {
    this.listStudent.push(student)
  }
  getListStudent() {
    for (const item of this.listStudent) {
      console.log(`toi ten la: ${item.name}`)
      console.log(`toi: ${item.getAge()} tuoi`)
      console.log(`toi den tu ${item.address}`)
      // toi ten la: name, toi '18' tuoi, 
      // toi den tu 'address'
    }
  }
}
const userA = new Student('userA', 1997, 'HN')

const admin = new Admin()
admin.addStudent(userA)
admin.addStudent(new Student('userB', 1998, 'HD'))
admin.getListStudent()
// const userA = new Student('userA', 1997, 'HN')
// const userB = new Student('userB', 2020, 'HN')
// console.log(userA.getAge())
// class Animal
// name, color, numOfLegs
// eat => con "name" dang an
// isDangerous => true / false 
// true khi 2 < numOfLegs || numOfLegs > 4
// class Animal{
//   name
//   color
//   numOfLegs
//   constructor(name, color, numOfLegs) {
//     this.name = name
//     this.color = color
//     this.numOfLegs = numOfLegs
//   }
//   eat() {
//     console.log(`Con ${this.name} dang an`)
//   }
//   isDangerous() {
//     return this.numOfLegs < 2 || this.numOfLegs > 4
//   }
// }
// const dog = new Animal('Mèo', 'Yellow', 4)

// console.log(dog.isDangerous())

// class Dog extends Animal {
//   genres
//   constructor(name, color, numOfLegs, genres) {
//     super(name, color, numOfLegs)
//     this.genres = genres
//   }
//   eat() {
//     console.log('GAU GAU')
//   }
// }
// const myDog = new Dog('Mèo', 'Yellow', 4, 'Alaska')
// // console.log(myDog.)
// myDog.eat()


// isMale = 1 // con trai
// if (isMale === true) {
//   console.log('con trai')
// } else {
//   console.log('con gai')
// }
// const str = (isMale === 1) ? 'con trai' 
// : ((isMale === 2) ? 'con gai' : 'khac')