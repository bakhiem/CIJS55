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
    this._shadowRoot.getElementById('register-form')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      const email = this._shadowRoot.getElementById('email').value
      const pass = this._shadowRoot.getElementById('pass').value
      firebase.auth().createUserWithEmailAndPassword(email, pass)
    })
  }
}
window.customElements.define('register-screen', RegisterScreen)