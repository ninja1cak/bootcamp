const validationInput = (keyword, numShowName) =>{
 
  if(typeof(keyword) != 'string') return "INPUT KEYWORD BERUPA STRING"
  if(!keyword.trim()) return "INPUT KEYWORD MINIMAL 1 HURUF"
  if(numShowName<=0) return "INPUT JUMLAH NAMA YANG DITAMPILKAN MINIMAL 1"
  if(isNaN(numShowName)) return "INPUT JUMLAH YANG NAMA DITAMPILKAN BERUPA NUMBER"
  return true
}


const searchName = (keyword, numShowName, callback) =>{
  

  let isInput = validationInput(keyword, numShowName)
  
  if(isInput == true){
  

    const listName = [
      "Abigail", "Alexandra", 'Alison',
      'Amanda', 'Angela', 'Bella',
      'Carol', 'Caroline', 'Carolyn',
      'Deirdre', 'Diana', 'Elizabeth',
      'Ella', 'Faith', 'Olivia', 'Penelope']

    keyword = keyword.trim().toLowerCase()
    let keywordLength = keyword.length
    let index = 0
    let output = []

    for(let i = 0 ; i<listName.length ; i++){
      temp = listName[i]
      name = temp.toLowerCase()

      for(let j = 0 ; j<name.length ; j++){

        if(keyword.toLowerCase() == name.slice(j, j+keywordLength)){
          output[index]= temp
          index++ 
          break
        }
      }
      if(output.length == numShowName) break
    }
    callback(output)
  }else{
    callback(isInput)
  }
}

const showName = (names) =>{
  console.log(names)
}



searchName("ol", 4, showName)
