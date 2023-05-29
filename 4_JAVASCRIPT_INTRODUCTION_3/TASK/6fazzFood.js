const FazzFood = (harga, voucher, jarak, pajak) =>{

  if(voucher == "FAZZFOOD50" && voucher == "DITRAKTIR60") return console.log("PROMO TIDAK DITEMUKAN")

  let potongan = 0
  let ongkir = 0
  let nilaiPajak = 0


  if(voucher == "FAZZFOOD50" && harga >= 50_000){
    potongan = 0.5 * harga
    if(potongan > 50_000) potongan = 50_000

  }else if(voucher == "FAZZFOOD50" && harga < 50_000){
    return console.log("MINIMUM PEMBELIAN 50.000")
  }

  if(voucher == "DITRAKTIR60" && harga >= 25_000){
    potongan = 0.6 * harga
    if(potongan > 30_000) potongan = 30_000

  }else if(voucher == "DITRAKTIR60" && harga >= 25_000){
    return console.log("MINIMUM PEMBELIAN 25.000")
  }

  if(jarak<=2){
    ongkir = 5_000
  }else{
    jarak = Math.ceil(jarak)
    ongkir = 5_000 + (3_000 * (jarak-2))
  }

  if(pajak == true){
    nilaiPajak = 0.05 * harga
  }

  const total = harga - potongan + ongkir + nilaiPajak

  console.log(`Harga : ${harga}
Potongan : ${potongan}
Biaya Antar : ${ongkir}
Pajak :  ${nilaiPajak}
Subtotal : ${total} `)


}



FazzFood(500_000, "FAZZFOOD50",5,true)

