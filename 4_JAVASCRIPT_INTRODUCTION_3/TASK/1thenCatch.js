const cekHariKerja= (day) =>{
  return new Promise( (resolve, reject) => {
    setTimeout(() =>{
      const dataDay = ['senin','selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item)=>{
        return item === day
      })

      if(cek){
        resolve(cek)
      }else{
        reject( new Error('hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja("senin").then((result) =>{
  console.log(result)
}).catch(error => {
  console.log(error)
})

cekHariKerja("minggu").then(result=>{
  console.log(result)
}).catch(error => {
  console.log(error)
})

/*
  dilakukan pengecekan hari terlebih dahulu, jika pengecekan hari true (nilai cek mengandung string hari) maka then akan dieksekusi, variabel result sendiri
  mengandung nilai dari variabel cek (resolve(cek)), lalu ditampilkan value result dalam terminal.
  jika pengecekan hari tidak ditemukan (undefined) maka catch akan dieksekusi dan pada terminal akan menampilkan new Error("hari ini bukan hari kerja")
  */