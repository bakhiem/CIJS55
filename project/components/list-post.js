import { getDataFromDocs, getDataFromDoc } from '../utils.js'

const style = `
  .container{
    width: 60%;
    margin: auto;
  }
`
class ListPost extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this.renderHtml()
    this.listenChange()
  }
  async renderHtml() {
    const res = await firebase.firestore().collection('posts').get()
    this.listPost = getDataFromDocs(res.docs)
    let html = ''
    for (const item of this.listPost) {
      html += `<post-item content="${item.content}" image="${item.image ? item.image : ''}" author="${item.authorName}"></post-item>`
    }
    this._shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    <div class="container">
      ${html}
    </div>
    `
  }
  listenChange() {
    let firstRun = true
    firebase.firestore().collection('posts').onSnapshot((snapShot) => {
      if (firstRun) {
        firstRun = false
        return
      }
      for (const change of snapShot.docChanges()) {
        const docChange = getDataFromDoc(change.doc)
        if (change.type === 'added') {
          const postItemElm = document.createElement('post-item')
          postItemElm.setAttribute('content', docChange.content)
          postItemElm.setAttribute('image', docChange.image ? docChange.image : '')
          postItemElm.setAttribute('author', docChange.authorName)
          this._shadowRoot.querySelector('.container').appendChild(postItemElm)
        }
      }
    })
  }
}
window.customElements.define('list-post', ListPost)