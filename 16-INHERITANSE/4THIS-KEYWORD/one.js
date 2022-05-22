// BY USING SUPER KEYWORD IN CONSTRUCTOR METHODS FOR NOT OVER_RIDING

class Account {
    constructor (id,name) {
        this.id = id;
        this.name = name;
    }
}
class Savings_Account extends Account {
    constructor (id,name,balance) {
        super (id,name)
        this.balance = balance;
    }
}
let r1 = new Savings_Account (101,"9SAI",45000);
let r2 = new Savings_Account (102,"ANIL",40000);
console.log(r1);                                    // Savings_Account { id: 101, name: '9SAI', balance: 45000 }
console.log(r2);                                    // Savings_Account { id: 102, name: 'ANIL', balance: 40000 }