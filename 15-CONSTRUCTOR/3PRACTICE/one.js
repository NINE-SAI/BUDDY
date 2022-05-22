class Bank {
    min_Bal=500;
    constructor (a,b) {
        this.name = a ;
        this.amount = b ;
    }
    get_Details(){
        return this.amount - this.min_Bal
    }
}
let r1 = new Bank ("9SAI" , 4500) ;
console.log(r1.get_Details());                                  // 4000