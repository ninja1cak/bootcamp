const username = 'fazza'
const password = '12345'
//if else
if(username!="fazz" || password != "12345"){
  console.log('gagal login')
}else{
  console.log('berhasil login')
}


const isLogin = username != "fazz" || password != '12345' ?  "anda gagal login" : "anda berhasil login"

console.log(isLogin)

const arrBuah = ["apel", "jeruk", "kelengkeng"]

arrBuah.forEach(element => {
  console.log(element)
});

const tahunLahir = 2022;
const tahunSekarang = 2023;

const output = `saya lahir ${tahunLahir}, sekarang saya umur ${tahunLahir - tahunSekarang}`
console.log(output)

//spread operator

const id ={
  usernamea: "ninja1cak",
  passwordd: "tes123"  
}

const tanggalLahir = {
  tanggal: 14,
  bulan: 'Januari'
}

const arr1 = [1,2,3,4,5]



const idAndTanggalLahir = {...id,...tanggalLahir}


const idAndTanggalLahirNmuber = {...id,...tanggalLahir, ...arr1}
console.log(idAndTanggalLahir)
console.log(idAndTanggalLahirNmuber)

let {passwordd} = id

console.log(passwordd)

const data = [
  {
    tes12 : "ss",
    xcx : 2
  }
]