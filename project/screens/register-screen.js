const style = `
  #register-form {
    width: 40%;
    margin: AUTO;
    text-align: center;
    background: #dbdbdb;
    height: 100%;
    padding-top: 3%;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .container {
    height: 100vh;
  }
`
import { emailValid } from "../utils.js"
import { redirect } from "../index.js"
class RegisterScreen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="container">
        <form id="register-form">
          <div class="title">Share story</div>
          <input-wrapper id="name" type="text" placeholder="Full name" ></input-wrapper>
          <input-wrapper id="email" type="email" placeholder="Email" ></input-wrapper>
          <input-wrapper id="pass" type="password" placeholder="Password" ></input-wrapper>
          <input-wrapper id="confirm-pass" type="password" placeholder="Confirm password" ></input-wrapper>
          <button class="btn">Register</button>
          <div id="redirect">Already have an account? Login</div>
        </form>
      </div>
    `
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () => {
      redirect('login')
    })
    this._shadowRoot.getElementById('register-form')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      const name = this._shadowRoot.getElementById('name').value
      const email = this._shadowRoot.getElementById('email').value
      const pass = this._shadowRoot.getElementById('pass').value
      const confirmPass = this._shadowRoot.getElementById('confirm-pass').value
      let isValid = true
      if (name.trim() === '') {
        this._shadowRoot.getElementById('name')
        .setAttribute('error', 'Please input full name')
        isValid = false
      } else {
        this._shadowRoot.getElementById('name')
        .setAttribute('error', '')
      }
      if (email.trim() === '') {
        this._shadowRoot.getElementById('email')
        .setAttribute('error', 'Please input email')
        isValid = false
      } else if (emailValid(email) === false) {
        this._shadowRoot.getElementById('email')
        .setAttribute('error', 'Email does not valid')
        isValid = false
      } else {
        this._shadowRoot.getElementById('email')
        .setAttribute('error', '')
      }
      if (pass.trim() === '') {
        this._shadowRoot.getElementById('pass')
        .setAttribute('error', 'Please input password')
        isValid = false
      } else {
        this._shadowRoot.getElementById('pass')
        .setAttribute('error', '')
      }
      if (confirmPass.trim() === '') {
        this._shadowRoot.getElementById('confirm-pass')
        .setAttribute('error', 'Please input confirm password')
        isValid = false
      } else if(confirmPass !== pass) {
        this._shadowRoot.getElementById('confirm-pass')
        .setAttribute('error', 'Password not match')
        isValid = false
      } else {
        this._shadowRoot.getElementById('confirm-pass')
        .setAttribute('error', '')
      }
      if (isValid) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((res) =>{
          alert('register success')
          firebase.auth().currentUser.sendEmailVerification()
          firebase.auth().currentUser.updateProfile({
            displayName: name
          })
          redirect('login')
        })
        .catch((err) => {
          alert(err.message)
        })
      }
    })
  }
}
window.customElements.define('register-screen', RegisterScreen)