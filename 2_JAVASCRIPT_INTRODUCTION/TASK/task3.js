const printSegitiga = 5
let state = true
let output = ""

//validasi
if(typeof(printSegitiga) != "number" || Math.round(printSegitiga) != printSegitiga || printSegitiga<0){
  console.log("DATA HARUS NUMBER DAN BERUPA INTEGER POSITIF")
  state = false
}

if(state){
  for(let row = printSegitiga; row>0; row--){
    for(let column = 1; column <=row; column++){
      if(column < row) output += (column + " ")
      if(column == row) output += column 
    }
  console.log(output)
  output = ""
  }
}