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
  keyword = "ex"
  console.log(listName.filter( name=> name.includes(keyword)))
}

const showResultName = (resultName) => {
  console.log(resultName)
}

searchName("ab", 4, showResultName)