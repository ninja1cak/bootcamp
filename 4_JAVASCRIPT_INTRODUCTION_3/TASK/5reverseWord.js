const reverseWord =  (text) =>{

  if(typeof(text) != "string") return console.log("INPUT DALAM BENTUK STRING")  
  if(text.trim()=="") return console.log("INPUT TIDAK BOLEH KOSONG")

  const reverseByWord = text.split(" ").reverse().join(" ")

  return console.log(reverseByWord)


}

reverseWord("Saya belajar javascript")