// // BY USING 2 (OR) MORE CHILD CLASESS

class Account {
    constructor (id,name) {
        this.id=id;
        this.name=name;
    }
}
class Saving_Account extends Account {
    min_Bal=500;
    constructor (id,name,amount) {
        super (id,name);
        this.amount=amount;
    }
    get_Bal () {
        return this.amount - this.min_Bal
    }
}
class Current_Account extends Account {
    min_Bal=1000;
    constructor (id,name,amount) {
        super (id,name);
        this.amount=amount;
    }
    get_Bal () {
        return this.amount - this.min_Bal;
    }
}
let r1 = new Saving_Account (101,"9SAI",45000);
let r2 = new Current_Account(102,"ANIL",40000);

// GETTING THE AMOUNT-MIN_BAL
console.log(r1.get_Bal());                                  // 44500
console.log(r2.get_Bal());                                  // 39000

// EMPLOYEE DATA GETTING
console.log(r1);
console.log(r2);