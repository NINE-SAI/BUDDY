// CONSTRUCTOR OVER_RIDING

class Account {
    constructor () {
        console.log("9SAI")
    }
}
class Savings_Account extends Account {
    constructor () {
        console.log("ANIL")
    }
}
let r1 = new Savings_Account ()                                     // ANIL