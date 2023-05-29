const getName = async () =>{
  try{  
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonData = await response.json()
    let nameArray  = []
    jsonData.forEach((element, index) => {
      const {name} = jsonData[index]
      nameArray.push(name)
    });
  console.log(nameArray)
  }catch{
    console.log("SALAH")
  }

}

getName() 