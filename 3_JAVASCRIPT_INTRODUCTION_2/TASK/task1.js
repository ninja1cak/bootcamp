const x = "enam";

//1 
if(isNaN(x)){
  console.log("isNaN : " + isNaN(x))
}

let personaFromMC = ["orpheus", "izanagi", "Arsene", "Beth"]
//2
personaFromMC.push("orpheus telos")
console.log("PUSH : " + personaFromMC)
//3
personaFromMC.pop()
console.log("POP : " + personaFromMC)
//4
let stringText = personaFromMC.join("&")
console.log(`join : ${stringText}`)
//5
console.log(`split : ${stringText.split("&")}`)
//6
console.log(`reverse : ${personaFromMC.reverse()}`)

//7
personaFromMC.forEach(element => {
  //8 //9
  if(element.toLowerCase().search("a") != -1) console.log(`FIND IT :  ${element}`)
})
//10
console.log(`sort : ${personaFromMC.sort()}`)

let myName = "hauzan"
//11
console.log("slice :" + myName.slice(1,2))
myName = "        Hauzan           "
//12
console.log("trim :" + myName.trim())

