import './userCard.js'
class People {
  name
  age
  job
  id
  constructor(name, age, job, id) {
    this.name = name
    this.age = age
    this.job = job
    this.id = id
  }
  showInfo() {
    return `
      <user-card name="${this.name}" age="${this.age}"></user-card>
    `
  }
}
const dad = new People('Dad', 40)
console.log(dad.showInfo())
document.getElementById('app').innerHTML = dad.showInfo()


// class Family {
//   numOfPeople
//   address
//   listPeople
//   constructor(address) {
//     this.address = address
//     this.numOfPeople = 0
//     this.listPeople = []
//   }
//   addPeople(people) {
//     this.listPeople.push(people)
//     this.numOfPeople ++
//   }
//   showInfo() {
//     let peopleInfo = ''
//     for (const item of this.listPeople) {
//       peopleInfo += item.showInfo()
//     }
//     return `
//     Address: ${this.address}
//     Has ${this.numOfPeople} people
//     ${peopleInfo}
//     `
//   }
// }
// const child = new People('Child', 5, 'Student', 123)
// const dad = new People('Dad', 40, 'Dev', 1234)
// const mom = new People('Mom', 35, 'Test', 1235)
// const myFamily = new Family('22C')
// myFamily.addPeople(child)
// myFamily.addPeople(dad)
// myFamily.addPeople(mom)

// class Town{
//   name
//   listFamily
//   constructor(name) {
//     this.name = name
//     this.listFamily = []
//   }
//   addFamily(family) {
//     this.listFamily.push(family)
//   }
//   showInfo() {
//     for (const item of this.listFamily) {
//       document.getElementById('app').innerHTML = item.showInfo()
//     }
//   }
// }
// const town = new Town('Thanh Cong')
// town.addFamily(myFamily)
// console.log(town)
// town.showInfo()