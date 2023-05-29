const seleksiNilai = (valueBegin, valueEnd, dataArray) =>{
  if(valueBegin > valueEnd) return new Error("Nilai akhir harus lebih besar dari nilai awal")
  if(dataArray.length < 6) return new Error("Jumlah angka dalam dataArray harus lebih dari 5")

  sortingData = dataArray.sort((a,b) => (a-b))
  console.log(sortingData)
  let stateBegin =0, stateEnd =0
  indexTop = sortingData.length - 1
  
  for(let index = 0; index <sortingData.length;index++){
    if(sortingData[index]>valueBegin && stateBegin == 0){
      tempBegin = index
      stateBegin = 1
     }    
    if(sortingData[indexTop]<valueEnd && stateEnd == 0) {
      tempEnd = indexTop
      stateEnd = 1
    }
    indexTop--
    
    if(stateBegin == 1 && stateEnd == 1){
      return sortingData.slice(tempBegin, tempEnd+1)
    }
  }
  return "Nilai tidak di temukan"

}


console.log(seleksiNilai(1,10,[2,1,3,9,8,10]))

