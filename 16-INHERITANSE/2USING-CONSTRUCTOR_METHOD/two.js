// BY USING CONSTRUCTOR AND NORMAL METHODS

class Account {
    constructor(){
        console.log("9SAI")
    }
    get_Details(){
        console.log("ANIL")
    }
}
class Savings_Account extends Account{}
let r1 = new Savings_Account()                              // 9SAI
r1.get_Details()                                            // ANIL