const myButton = document.querySelector('#my-button')
console.log(myButton)
myButton.addEventListener('click', (e) => {
  // cach 1
  // const elm = document.getElementsByClassName('content')
  // console.log(elm[0])
  // cach 2
  const elm = document.querySelector('.content')
  console.log(elm)
  elm.innerHTML = 'Hello world'
})
