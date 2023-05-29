const divideAndSort = value => {

  if(typeof(value) != "number") {

    return console.log("INPUT NUMBER")
  }

  let temp =""
  let outputArray = []
  const arrayValue = value.toString().split("0")

  arrayValue.forEach(element => {
    
    temp = element.split("").sort().join("")
    outputArray.push(temp)

  });

  const outputString = outputArray.join("")
  const output = parseInt(outputString)
  console.log(output)  
}


divideAndSort(5956560159466056)