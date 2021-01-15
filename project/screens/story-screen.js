class StoryScreen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this._shadowRoot.innerHTML = `Welcome ${currentUser.displayName}`
  }
}
window.customElements.define('story-screen', StoryScreen)