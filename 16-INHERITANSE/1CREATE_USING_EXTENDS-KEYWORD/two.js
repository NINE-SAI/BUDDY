// METHODS EXISTS IN BOTH PARENT AND CHILD CLASS

class Account {
    get_Details () {
        console.log("9SAI")
    }
}
class Savings_Account extends Account {
    get_Amount () {
        console.log("ANIL")
    }
}
let r1 = new Savings_Account ()
r1.get_Details()                                        // 9SAI
r1.get_Amount()                                         // ANIL