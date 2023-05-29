const getMonth = (callback) => {
  setTimeout(() => {
    let error = true
    let month = ['januari', 'februari', 'maret', 'april', 'mei', 'juni',
                  'juli', 'agustus', 'september', 'oktober', 'november', 'desember']

    if(!error){
      callback(null, month)
    }else{
      callback(new Error('Sorry Data Not FOund'))
    }
  }, 4000)
}

const showMonth = (parameter, month) =>{
  if(parameter == null) {
    return month.map(element => console.log(element))
  }else{
    return console.log(parameter)
 }
}

getMonth(showMonth)