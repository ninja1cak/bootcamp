const printSegitiga = 3
let state = 0

function checkInput(value){
  if(typeof(value) != "number" || Math.round(value) != value || value<0){
    return "INPUT NUMBER BERUPA INTEGER POSITIF"
  }
  return true
}

function outputConsole(value){
  let output = ""
  for(let row = printSegitiga; row>0; row--){
    for(let column = 1; column <=row; column++){
      if(column < row) output += (column + " ")
      if(column == row) output += column 
    }
  console.log(output)
  output = ""
  }
}

if(checkInput(printSegitiga)){
  outputConsole(printSegitiga)
}