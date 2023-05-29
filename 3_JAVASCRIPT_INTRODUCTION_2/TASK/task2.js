const searchName = (keyword, numShowName, callback) =>{
  if(typeof(keyword) != 'string') return callback("INPUT KEYWORD BERUPA STRING")
  if(!keyword.trim()) return callback("INPUT KEYWORD MINIMAL 1 HURUF")
  if(numShowName<=0) return callback("INPUT JUMLAH NAMA YANG DITAMPILKAN MINIMAL 1")
  if(isNaN(numShowName)) return callback("INPUT JUMLAH YANG NAMA DITAMPILKAN BERUPA NUMBER")
  
  keyword = keyword.trim().toLowerCase()

  const listName = [
    "Abigail", "Alexandra", 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
  
  let names = []

  listName.forEach(name =>{
    output = name.toLowerCase().search(keyword)
    
    if(output!=-1 && names.length < numShowName){
      names.push(name)
    }
    
    if(names.length == numShowName){
      return
    }
  })
  callback(names)
}

const showResultName = (resultName) => {
  console.log(resultName)
}

searchName("              ", 4, showResultName)