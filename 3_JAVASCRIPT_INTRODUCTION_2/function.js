function sayHello(){ //minus hoisting
  console.log('hello worlds')
}

//expresion es5
const sayName = function(){
  console.log("ojanz")
}

//exppresion es6 (arrow_function)

const helloWord = () =>{
  console.log("testing")
  return helloWord 
}

const sayMyName = (name, region) =>{
  const isRegion = region == 'id' ? console.log(`hello ${name}`) : console.log(`helle ${name}`)
}
sayName()
sayMyName("hauzan", 'id')


//factory javascript

function tess2(){
  return{
    //method
    hellow : function (){
      console.log('hellow')
    }
  }
}

const f = ( )=>{
  return{
    case : () =>{
      console.log("testing")
    }
  }
}

f().case()

const arrayValue = [1, 2, 3, 4]

const user = {
  firstName: 'verdi',
  lastName : 'samseka',
  getFullName : () =>{
    return `${this.firstName} ${this.lastName}`
  },

  setName : (fname, lname) =>{
    this.firstName = fname;
    this.lastName = lname;
  }
  
}

const user_2 = user.setName("hauzan", "khoirullah")

console.log(user.getFullName())
arrBuah = ["apple", "jeruk", "kelengkeng"]

let element = () =>{
  console.log(element)
}


const fungsi = (value, index, array) =>{
  console.log(value)
  console.log(index)
  console.log(array)
}
arrBuah.forEach(fungsi)
