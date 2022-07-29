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
let hobby = ["Renang", "Games", "Mendengarkan musik"]


const dataNew = { ...data, ...hobby, name: "Muhamad Allya Agung Syafira", email: "Mallyaagung@gmail.com" }
console.log(dataNew)

//ambil data menggunakan destructuring
// let { address: { street, city } } = dataNew;
// console.log(street)

//ambil data tanpa menggunakan destructuring
// console.log(`Street name is ${data.address.street}\nCity name is ${data.address.city}`)
