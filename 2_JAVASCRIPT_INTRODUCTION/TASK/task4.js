
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
  
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

const myBio = {
  name: "Hauzan Khoirullah Miftah",
  email: "hauzan41200@gmail.com",
  hobbies: "gaming"
}

data = {...data, ...myBio}
console.log(data)

// const {address} = data
// const {street, city} = address

const {address : {street, city}} = data

console.log(`Street = ${street} \ncity = ${city}`)