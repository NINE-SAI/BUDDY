// BY USING SUPER KEYWORD WE CAN STOPS THE METHOD OVER_RIDING

class Account {
    constructor () {
        console.log ("9SAI")
    }
}
class Savings_Account extends Account {
    constructor () {
        super ()
        console.log ("ANIL")
    }
}
let r1 = new Savings_Account ()                             // 9SAI
                                                            // ANIL