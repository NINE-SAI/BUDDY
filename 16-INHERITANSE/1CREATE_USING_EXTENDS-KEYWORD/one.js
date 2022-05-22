// BY USING EXTENDS KEYWORD WE CREATE RELATION TO PARENT CLASS TO CHILD CLASS

class Account {
    get_Details () {
        console.log ("9SAI")
    }
}
class Savings_Account extends Account {}
let r1 = new Savings_Account ()
r1.get_Details()                                            // 9SAI