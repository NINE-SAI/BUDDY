// 

const Account = require ('./export')
class Address {
    constructor (village,city) {
        this.village=village
        this.city=city
    }
}
let r1 = new Address ("pallavolu","kadapa",new Account (101,"9SAI"))
console.log(r1);