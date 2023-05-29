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

const hariKerja = async () => {
  
  try {
    const result = await cekHariKerja("senin")
    console.log(result)
    const cekHari = await cekHariKerja("sabtu")
    console.log(cekHari)
  } catch (error) {
    console.log(error)
  }
}

hariKerja()

/*
  program akan mengeksekusi try terlebih dahulu, lalu dilakukan pengecekan hari, jika hari ditemukan maka hari tersebut akan ditampilkan pada console,
  jika hari tidak ditemukan, program akan loncat mengeksekusi catch dengan menampilakn konsol error.
*/