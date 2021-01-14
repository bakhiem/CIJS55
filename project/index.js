import './screens/register-screen.js'
import './screens/login-screen.js'
import './components/input-wrapper.js'
redirect('register')
export function redirect(screenName){
  if(screenName === 'login') {
    document.querySelector('#app')
    .innerHTML = `<login-screen></login-screen>`
  } else if(screenName === 'register') {
    document.querySelector('#app')
    .innerHTML = `<register-screen></register-screen>`
  } else if(screenName === 'story') {
    document.querySelector('#app')
    .innerHTML = `<story-screen></story-screen>`
  }
}