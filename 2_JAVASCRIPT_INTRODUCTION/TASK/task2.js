const mtk = -3
const bahasaIndonesia = 90
const bahasaInggris = 80
const ipa = 70
const arrayValue = [mtk, bahasaIndonesia, bahasaInggris, ipa]

let state = true;

for(let index = 0; index<arrayValue.length;index++){
 
  if(typeof(arrayValue[index]) != "number"){
    console.log("masukkan nilai berupa angka !!")   
    state = false;
    break;
  }

  if(arrayValue[index]<0 || arrayValue[index]>100){ //salah dipengkondisian harus pake OR tadi pake &&
    console.log("masukkan nilai dengan range 0 - 100. !!")
    state = false;
    break;
  }
}

if(state){
  let sum = 0, average = 0

  for(let index = 0; index<arrayValue.length;index++){
    sum += arrayValue[index]
  }

  average = sum/arrayValue.length

  console.log(`Rata-rata = ${average}`)
  
  if(average >= 90){
    console.log("Grade = A")    
  }else if(average >=80){
    console.log("Grade = B")
  }else if(average >= 70){
    console.log("Grade = C")
  }else if(average >=60){
    console.log("Grade = D")
  }else{
    console.log("Grade = E")
  }

}