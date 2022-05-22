// MEARGING AN OBJECT BY USING SPREAD OPERATOR

let user = {id:101,name:"9SAI",email:"9sai@gmail.com"}
let details = {email:"9sai1234@gmail.com",salary:50000}
let user_Details = {...user,...details}
console.log(user_Details);

// email KEY IS OVER-RIDING (OBJECT DOES NOT ALLOWS DUPLICATE KEYS)
// { id: 101, name: '9SAI', email: '9sai1234@gmail.com', salary: 50000 }