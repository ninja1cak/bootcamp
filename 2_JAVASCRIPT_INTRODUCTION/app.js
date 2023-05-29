// const obj = {nama : "budi", umur : 17, umurString : "17"}

// let value = Object.values(obj)
// let keys = Object.keys(obj)


// console.log(obj.nama)
// if(value[1] == value[2]){
//   console.log("data tipe beda")
// }

// if(value[1]!=value[2]){
//   console.log("data tipe sama")
// }

// const c = 10
// const d = 2

// console.log(`value a = ${c} value b = ${d}, maka sum a + b adalah ${c+d}`)
// const q =[1,2]
// const w = [1,3]
// const z = w + q;
// const r = [...q,...w]
// console.log(z);
// const num = 100000000000000000;
// console.log(num);

// const {nama, umur, umurString} = obj

// console.log(nama);

const value = 3
const valArray = [1,2,3,4,5,6]
let isNumber = (value%2) == 1 ? "ganjil"  : "genap"

console.log(isNumber)

valArray.forEach(element => {
  isNumber = element <3 || element >5 ? "kurang dari 3 atau lebih dari 5" : "diantara 3 dan 5"
  console.log(`${element} == ${isNumber}`)
});
