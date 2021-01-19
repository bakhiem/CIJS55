class CreatePost extends HTMLElement{
  constructor() {
    super()
    this._shadowDom = this.attachShadow({mode: 'open'})
    this._shadowDom.innerHTML = `
     <div class="create-post">
      <textarea id="content" rows="4"/>
      <button>Post</button>
     </div>
    `
  }
}
window.customElements.define('create-post', CreatePost)