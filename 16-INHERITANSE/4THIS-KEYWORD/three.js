// ADDING NORMAL FUNCTION WITH RETURN STATEMENT

class Account {
    constructor (id,name) {
        this.id=id;
        this.name=name;
    }
}
class Savings_Account extends Account {
    min_Balance=1000;
    constructor (id,name,balance) {
        super (id,name)
        this.balance=balance;
    }
    get_Details () {
        return this.balance - this.min_Balance;
    }
}
let r1 = new Savings_Account(101,"9SAI",45000);
let r2 = new Savings_Account(102,"ANIL",40000);
console.log(r1.get_Details());                                    // 44000
console.log(r2.get_Details());                                    // 39000