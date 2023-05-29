const checkPalindrome = (text)=>{


  if(typeof(text) != "string") return console.log("INPUT DALAM BENTUK STRING")  
  if(text.trim()=="") return console.log("INPUT TIDAK BOLEH KOSONG")
  
  const normalText = text.trim().toLowerCase()
  const reverseText = normalText.split("").reverse().join("")
  const isPalindrome = normalText == reverseText ? console.log("Palindrom") : console.log("Bukan Palindrome")

}

checkPalindrome("             aalam")  


