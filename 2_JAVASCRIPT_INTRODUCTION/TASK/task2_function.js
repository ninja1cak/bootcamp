const mtk = 65
const bahasaIndonesia = 65
const bahasaInggris = 65
const ipa = 100
const arrayValue = [mtk, bahasaIndonesia, bahasaInggris, ipa]


function checkInput(x){
 
  for(let index = 0; index<x.length; index++){

    if(typeof(x[index]) !== "number"){   
      return "masukkan nilai berupa angka !!"     
    }
    
    if(x[index]<0 || x[index]>100){ 
      console.log("masukkan nilai >= 0 dan nilai <= 100. ")
      return "masukkan nilai dengan range 0 - 100. !!"
    }
  }
  return true
}

function gradeAverage(y){
  if(y >= 90){
    return "Grade = A"
  }else if(y >=80){
    return "Grade = B"
  }else if(y >= 70){
    return "Grade = C"
  }else if(y >=60){
    return "Grade = D"
  }else{
    return "Grade = E"
  }
}

if(checkInput(arrayValue) == true){
  let sum = 0, average = 0, grade = ''

  for(let index = 0; index<arrayValue.length;index++){
    sum += arrayValue[index]
  }
  average = sum/arrayValue.length

  grade = gradeAverage(average)
  console.log(grade)
}else{
  console.log(checkInput(arrayValue))
}

