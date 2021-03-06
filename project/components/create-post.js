const style = `
  #create-post {
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;
  }
  #create-post textarea {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    outline: none;
  }
  .post {
    background-color: #1976D1;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    #create-post{
      width: 80%;
    }
  }
`;
import { uploadFile } from "../utils.js"
class CreatePost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
    this._shadowDom.innerHTML = `
      <style>
        ${style}
      </style>
      <div id="create-post">
        <textarea id="content" rows="6"></textarea>
        <input id="file" type="file">
        <button id="post">Post</button>
      </div>
    `;
    const postForm = this._shadowDom.getElementById("post");
    postForm.addEventListener("click", async () => {
      const content = this._shadowDom.getElementById("content").value;
      if (content.trim() === "") {
        alert("Vui lòng nhập nội dung bài viết");
      }
      const file = this._shadowDom.getElementById("file")
      let fileUrl = ''
      if (file.files.length > 0) {
        fileUrl = await uploadFile(file.files[0])
      }
      const data = {
        createdBy: currentUser.id,
        createdAt: new Date().toISOString(),
        content: content,
        authorName: currentUser.displayName,
        image: fileUrl
      };
      await firebase.firestore().collection("posts").add(data);
      this._shadowDom.getElementById("content").value = "";
    });
  }
}
window.customElements.define("create-post", CreatePost);
