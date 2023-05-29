const getResponse = async () =>{
    const response = await fetch(url = "https://jsonplaceholder.typicode.com/users")
    return await response.json()
}


const getName = async () =>{
  try {
    
  const object = await getResponse()
  const name = object.map(element =>{
    console.log(element.name)
  })
  } catch (error) {
    console.log(error)
  }
}

getName()

// getResponse().then(result =>{
//   result.map(element =>{
//     console.log(element.name)
//   }
//   )
// }).catch(error =>{
//   console.log(error)
// })