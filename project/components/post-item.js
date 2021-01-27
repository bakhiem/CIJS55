const style = `
  .item-container{
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
`
class PostItem extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this.content = this.getAttribute('content')
    this.author = this.getAttribute('author')
    this.image = this.getAttribute('image')
    let imgElm = ''
    if (this.image) {
      imgElm = `<img src="${this.image}" />`
    }
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="item-container">
        ${imgElm}
        <div class="author"> ${this.author} </div>
        <div class="content"> ${this.content} </div>
      </div>
    `
  }
  static get observedAttributes() {
    return ['image', 'author', 'content']
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'author') {
      this._shadowRoot.querySelector('.author').innerHTML = newValue
    }
    if (name === 'content') {
      this._shadowRoot.querySelector('.content').innerHTML = newValue
    }
  }
}
window.customElements.define('post-item', PostItem)