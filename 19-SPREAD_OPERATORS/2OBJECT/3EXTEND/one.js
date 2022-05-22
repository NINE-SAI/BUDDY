// EXTENDS AN OBJECT BY USING SPREAD OPERATOR

let user = {id:101,name:"9SAI"}
let details = {salary:50000,city:"KADAPA"}
let user_Details = {...user,...details,village:"PALLAVOLU"}
console.log(user_Details);

// { id:101, name:'9SAI', salary:50000, city:'KADAPA', village:'PALLAVOLU'}