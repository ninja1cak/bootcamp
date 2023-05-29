const seleksiNilai = (valueBegin, valueEnd, dataArray) =>{
  if(valueBegin > valueEnd) return console.log("Nilai akhir harus lebih besar dari nilai awal")
  if(dataArray.length < 6) return console.log("Jumlah angka dalam dataArray harus lebih dari 5")

  const output = dataArray.filter(value => (value > valueBegin && value<valueEnd) ).sort((a,b) => a-b)
  const isValue = output.length == 0 ? console.log("Nilai tidak di temukan") : console.log(output)

}


seleksiNilai(1,9,[2,1,3,9,8])




