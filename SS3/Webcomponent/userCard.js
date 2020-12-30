class UserCard extends HTMLElement{
  constructor() {
    super()
    this._shadowDom = this.attachShadow({mode: 'open'})
    this.name = this.getAttribute('name')
    this._shadowDom.innerHTML = `
    <style>
      .card-container img {
        object-fit: cover;
      }
      .card-container{
        width: 286px;
      }
      .name{
        font-weight: 600;
        font-size: 1.5rem;
      }
    </style>
    <div class="card-container">
      <div>
        <img src="https://picsum.photos/200/300" width="286px" height="180px" alt="">
      </div>
      <div class="card-body">
        <div class="name">
         ${this.name}
        </div>
        <div class="des">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores similique obcaecati doloribus expedita. Necessitatibus assumenda, temporibus cum iste vero quis aut odio tempora, natus ex doloremque culpa voluptas iure.
        </div>
      </div>
    </div>
    `
  }
  // khi ma component duoc attach vao dom
  connectedCallback() {
  }

}
window.customElements.define('user-card', UserCard)