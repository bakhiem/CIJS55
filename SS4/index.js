
getManyDocument()
// Read one 
async function getOneDocument() {
  const docId = 'NDmZHmaN2IK6QqiQwfyx'
  // promise
  // firebase.firestore().collection('users').doc(docId).get()
  // .then((res) => {
  //   console.log(res.data())
  // })
  // async await
   const res = await firebase.firestore().collection('users').doc(docId).get()
   const user = getDataFromDoc(res)
   console.log(user)
}
// Read multi
async function getManyDocument() {
  // const res = await firebase.firestore().collection('users')
  // .where('age', '==', 18).get()
  const res = await firebase.firestore().collection('users')
  .where('emails', 'array-contains', 'email1').get()
  const users = getDataFromDocs(res.docs)
  console.log(users)
}

function getDataFromDoc(doc) {
  const data = doc.data()
  data.id = doc.id
  return data
}
function getDataFromDocs(docs) {
  const arr = []
  for(const item of docs) {
    arr.push(getDataFromDoc(item))
  }
  return arr
  // return docs.map(getDataFromDoc)
}
// add document
// addDocument()
function addDocument() {
  const dataToAdd = {
    name: 'ABC',
    address: 'HN',
  }
  firebase.firestore().collection('users').add(dataToAdd)
}
updateDocument()
// update document
function updateDocument() {
  const idUpdate = 'kD9qZ09XZu14CdSmemV6'
  const dataToUpdate = {
    phones: firebase.firestore.FieldValue.arrayUnion('0890'),
    name: firebase.firestore.FieldValue.delete(),
  }
  firebase.firestore().collection('users')
  .doc(idUpdate).update(dataToUpdate)
}
deleteDocument()
// delete document
function deleteDocument() {
  const docId = 'xsjdeHeR1RITEgGIp1Qd'
  firebase.firestore().collection('users')
  .doc(docId).delete()
}