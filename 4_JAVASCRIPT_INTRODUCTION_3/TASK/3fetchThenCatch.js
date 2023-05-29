
const tes = fetch("https://jsonplaceholder.typicode.com/users")

tes.then(result =>{
  const dataObject = result.json()
  dataObject.then(result =>{
    const name = result.map(element => element.name)
    console.log(name)
  }).catch(error =>{
    console.log(error)
  })
}).catch(error =>{
  console.log(error)
})