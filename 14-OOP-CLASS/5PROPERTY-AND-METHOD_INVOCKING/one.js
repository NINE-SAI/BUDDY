// INVOCKING BOTH PROPERTY AND METHOD ONCE                          (INVOCKING NUMBER OF TIMES)

class Bank {
    //PROPERTY
    min_Bal = 500 ;
    // METHOD
    Savings(){
        console.log("NOT LESSTHAN 2000")
    }
}
let add = new Bank()
console.log(add)                                                    // Bank { min_Bal: 500 }
add.Savings(add)                                                    // NOT LESSTHAN 2000