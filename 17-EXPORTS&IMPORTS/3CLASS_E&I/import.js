// IMPORT IN CLASS

const Account = require ('./export')
class Address {
    constructor (city) {
        this.city=city;
    }
}
let r1 =  new Address ("KADAPA", new Account(101,"9SAI"));
console.log(r1);